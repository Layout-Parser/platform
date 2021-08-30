import { Endpoints } from "@octokit/types";
import { request } from "@octokit/request";
import YAML from "yaml";
import { ModelCardProps } from "./../components";

export type ListIssueResponse =
    Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
export type IssueData =
    Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]["data"];
export type IssueLabelsData =
    Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]["data"]["labels"];

export async function GitHubIssues() {
    const result = await request("GET /repos/{owner}/{repo}/issues", {
        owner: "Layout-Parser",
        repo: "platform",
        state: "closed",
    });

    const parsedData = result.data
        .filter((data: IssueData) => issueFilter(data["labels"]))
        .map((data: IssueData) => parseGithubIssue(data)!);

    const modelData = parsedData
        .filter((issueData) => issueData.issueType === "model")
        .map((issueData) => issueData.props);

    const pipelineData = parsedData
        .filter((issueData) => issueData.issueType === "pipeline")
        .map((issueData) => issueData.props);
    return [modelData, pipelineData];
}

interface parsedIssueData {
    props: ModelCardProps;
    issueType: string;
}

interface modelConfig {
    'lp-model-config'?: string;
    'lp-model-name'?: string;
    architecture: string;
    sizes: string;
}

function issueFilter(labels: IssueLabelsData) {
    for (let label of labels) {
        if (typeof label !== "string" && label.name === "model/approved")
            return true;
    }
    return false;
}

function parseGithubIssue(issue: IssueData) {
    const splitter = "```";
    const target = "yaml";
    const issueBody = issue.body;
    console.log(issue);
    if (issueBody) {
        const bodyPartsLis = issueBody.split(splitter);
        for (let bodyPart of bodyPartsLis) {
            if (bodyPart.startsWith(target)) {
                const yamlObj = YAML.parse(bodyPart.slice(target.length, -1));
                const dataInfo = new Date(issue.updated_at)
                    .toDateString()
                    .split(" ")
                    .slice(1);
                console.log(yamlObj);
                let model: parsedIssueData = {
                    props: {
                        name: yamlObj.name,
                        author: issue.user ? issue.user.login : "Unknown User",
                        updateTime: `${dataInfo[0]} ${dataInfo[1]}, ${dataInfo[2]}`,
                        docType: yamlObj.doctype.toLowerCase(),
                        issueLink: yamlObj.link ? yamlObj.link : issue.html_url,
                    },
                    issueType: yamlObj.type.toLowerCase(),
                };
                if (yamlObj['config-names']) {
                    model.props.modelSpecs = yamlObj['config-names'].map((config: modelConfig) => {
                        return {
                            modelConfig: config['lp-model-config'] || config['lp-model-name'],
                            tags: {
                                backend: config.architecture,
                                size: config.sizes
                            }
                        }
                    });
                }
                return model;
            }
        }
    }
}

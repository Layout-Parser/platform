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
    "lp-model-config"?: string;
    "lp-model-name"?: string;
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

    if (issueBody) {
        const bodyPartsLis = issueBody.split(splitter);
        for (let bodyPart of bodyPartsLis) {
            if (bodyPart.startsWith(target)) {
                const yamlObj = YAML.parse(bodyPart.slice(target.length, -1));
                const dateInfo = new Date(issue.updated_at)
                    .toDateString()
                    .split(" ")
                    .slice(1);
                console.log(issue);
                let model: parsedIssueData = {
                    props: {
                        name: yamlObj.name,
                        author: issue.user
                            ? issue.user.login === "lolipopshock"
                                ? "layout-parser"
                                : issue.user.login
                            : "Unknown User",
                        authorLink: issue.user
                            ? issue.user.html_url === "https://github.com/lolipopshock"
                                ? "https://layout-parser.github.io/"
                                : issue.user.html_url
                            : "",
                        updateTime: `${dateInfo[0]} ${dateInfo[1]}, ${dateInfo[2]}`,
                        docType: yamlObj.doctype
                            .replace(/\s/g, "")
                            .toLowerCase()
                            .split(","),
                        issueLink: yamlObj.link ? yamlObj.link : issue.html_url,
                    },
                    issueType: yamlObj.type.toLowerCase(),
                };

                if (yamlObj["config-names"]) {
                    model.props.modelSpecs = yamlObj["config-names"].map(
                        (config: modelConfig) => {
                            return {
                                modelConfig:
                                    config["lp-model-config"] || config["lp-model-name"],
                                tags: {
                                    backend: config.architecture,
                                    size: config.sizes,
                                },
                            };
                        }
                    );
                }
                return model;
            }
        }
    }
}

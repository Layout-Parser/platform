import { Endpoints } from "@octokit/types";
import { request } from "@octokit/request";
import YAML from "yaml";

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
    })

    const modelData = result.data
        .filter((data: IssueData) => issueFilter(data["labels"]))
        .map((data: IssueData) => parseGithubIssue(data));

    console.log(modelData)    
    return modelData;
};

function issueFilter(labels: IssueLabelsData) {
    for (let label of labels) {
        if (typeof label !== 'string' && label.name === "model/approved") return true;
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
                yamlObj.author = issue.user ? issue.user.login : "unknown user";
                yamlObj.updateTime = issue.updated_at;
                return yamlObj;
            }
        }
    }
}

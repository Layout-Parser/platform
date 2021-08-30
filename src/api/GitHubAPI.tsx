import React from 'react';
import { Endpoints } from "@octokit/types";
import { Octokit } from "@octokit/rest";
import YAML from "yaml";

const octokit = new Octokit();

export type ListIssueResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
export type IssueData =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]["data"];

export const GitHubIssues = () => {
    octokit
    .request("GET /repos/{owner}/{repo}/issues", {
      owner: "Layout-Parser",
      repo: "platform",
      state: "closed",
    })
    .then((response: ListIssueResponse) =>
      response.data
        .filter((data: IssueData) => data["body"] && data["body"].includes('```yaml'))
        .map((data: IssueData) => parseGithubIssue(data.body || ""))
    );
};

function parseGithubIssue(issueBody: String) {
    const splitter = "```";
    const target = "yaml";
    const bodyPartsLis = issueBody.split(splitter);
    for (let bodyPart of bodyPartsLis) {
        if (bodyPart.startsWith(target)) {
        const yamlObj = YAML.parse(bodyPart.slice(target.length, -1));
        return yamlObj;
        }
    }
}

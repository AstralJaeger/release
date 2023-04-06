// import * as core from '@actions/core';
// import * as github from '@actions/github';
import { Octokit } from "@octokit/core";
import { getEnvironment } from "./environment";


export const main = async () => {

  const env = getEnvironment();

  const octokit = new Octokit({
    auth: env.token
  });

  await octokit.request('POST /repos/{owner}/{repo}/releases', {
    owner: 'OWNER',
    repo: 'REPO',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    generate_release_notes: false,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
};

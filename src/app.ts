import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from "@octokit/core";
import { getEnvironment } from "./environment";
import { extractVersion } from "./version";


export const main = async () => {

  const env = getEnvironment();

  const version = extractVersion();
  core.debug(`Extracted version string: ${version}`);

  /* TODO's:
   * 1. Get basic repo info: owner, author, etc
   * 2. Create release tag
   * 3. Get commits since release
   * 3. Create release
   * 4.1. Delete old release => Retag to timestamped release?
   * 4.2. Create new release
   * 5. Upload artifacts (if any are required)
   * 
   */

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
      'X-GitHub-Api-Version': '2023-04-01'
    }
  })
};

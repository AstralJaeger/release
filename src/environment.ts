import * as core from '@actions/core';
import { EOL } from "node:os"

export type Environment = {
  token: string;
  tag: string;
  isDraft: boolean;
  isPreRelease: boolean;
  title: string;
  description: string;
  files: string[];
};

export const getEnvironment = (): Environment => {
  const env = {
    token: core.getInput('token', { required: true }),
    tag: core.getInput('tag', { required: true }),
    title: core.getInput('title', { required: true }),
    description: core.getInput('description', { required: false }),
    isDraft: JSON.parse(core.getInput('draft', { required: false })),
    isPreRelease: JSON.parse(core.getInput('prerelease', { required: false })),
    setArtifacts: JSON.parse(core.getInput('artifacts', { required: false })),
    changelog: core.getInput('changelog', { required: false }),
    files: [] as string[],
  };

  const inputFilesStr = core.getInput('files', {required: false});
  if (inputFilesStr) {
    env.files = inputFilesStr.split(EOL);
  }
  return env;
}

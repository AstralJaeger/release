import * as core from '@actions/core';

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
    tag: core.getInput('tag', { required: false }),
    isDraft: JSON.parse(core.getInput('isDraft', { required: true })),
    isPreRelease: JSON.parse(core.getInput('isPreRelease', { required: true })),
    title: core.getInput('title', { required: false }),
    description: core.getInput('description'),
    files: [] as string[],
  };

  const inputFilesStr = core.getInput('files', {required: false});
  if (inputFilesStr) {
    env.files = inputFilesStr.split(/\r?\n/);
  }
  return env;
}

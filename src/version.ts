import * as core from "@actions/core";



/**
 *
 */
export const extractVersion = (): string => {
  core.startGroup("getVersion");
  
  core.endGroup();
  return "0.0.0"
}

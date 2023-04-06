import * as core from '@actions/core';
import { main } from "./app";

main()
  .then(() => core.info("Done."))
  .catch((err) => core.error(`Error during execution: ${err}`))

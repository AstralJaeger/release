import log4js from "log4js";

log4js.configure({
  appenders: { console: { type: "console" } },
  categories: { default: { appenders: ["console"], level: "info" } },
});

const log = log4js.getLogger();

log.info(`Sentry Token set: `);

process.on("SIGINT", () => {
  // Graceful shutdown here
  log.info("Terminating application gracefully.");
  process.exit();
});

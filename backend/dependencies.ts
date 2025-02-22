import { DatabaseSync } from "node:sqlite";
import winston from "winston";

export type Dependencies = {
  db: DatabaseSync;
  logger: winston.Logger;
};

export const buildDependencies = (): Dependencies => {
  const db = new DatabaseSync(`${import.meta.dirname}/database/local.db`);

  const { combine, timestamp, json, errors } = winston.format;
  const logger = winston.createLogger({
    level: "info",
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [new winston.transports.Console()],
  });

  return {
    db,
    logger,
  };
};

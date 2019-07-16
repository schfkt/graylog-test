import * as winston from "winston";
import * as WinstonGraylog2 from "winston-graylog2";

const options: WinstonGraylog2.TransportOptions = {
  graylog: {
    facility: "test-nodejs-app",
    servers: [
      {
        host: "graylog.local",
        port: 12201,
      },
    ],
  },
  staticMeta: {
    some: "test metadata",
    doge: 42,
  },
  
};

const logger = winston.createLogger({
  transports: [
    new WinstonGraylog2(options),
  ],
  format: winston.format.combine(
    winston.format.errors({stack: true}),
    winston.format.metadata(),
  ),
});

logger.info("HELLO I AM A LOG MESSAGE", {omg: 12, wow: 42});
logger.info("OMG!", {omg: 12, wow: 42});
logger.info("BYE!", {omg: 12, wow: 42});
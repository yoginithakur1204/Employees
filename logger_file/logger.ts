import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),

  transports: [new transports.Console()],
});

if ((process.env.NODE_ENV = "development")) {
  logger.add(new transports.File({ filename: "error.log", level: "error" }));
}

export default logger;

//  transports: [
//   new transports.Console(),
//   // Add a file transport for error logs only in development environment
//   process.env.NODE_ENV === 'development'
//     ? new transports.File({ filename: 'error.log', level: 'error' })
//     : null, // Add null transport in non-development environments
//   new transports.File({ filename: 'combined.log' }),
// ].filter((transport) => !!transport), // Remove null transports

//  transports: [
//    new transports.Console(),
//    new transports.File({ filename: 'error.log', level: 'error' }),
//    new transports.File({ filename: 'combined.log' }),
//  ],

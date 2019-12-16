const winston = require('winston');
const path = require('path');

const { format } = winston;
const logPath = path.join(process.cwd(), 'tmp', 'logs');

//adds daily rotate transport to winston
require('winston-daily-rotate-file');

let dailyRotateTransport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '10m',
    maxFiles: '7d',
    dirname: logPath
});
//TODO:add logic to upload log files to AWS S3

//Print log in console in development mode
let consoleTransport = new winston.transports.Console();

const logger = winston.createLogger({
    transports: [
        dailyRotateTransport
    ],
    format: format.combine(
        format.label({ label: 'Tutor Hunt' }),
        format.timestamp(),
        format.json()
    ),
    exceptionHandlers: [
        dailyRotateTransport
    ],
    exitOnError: false
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(consoleTransport);
}
module.exports = logger;
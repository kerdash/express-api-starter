import { createLogger, transports, format } from 'winston';

const { DEVELOPMENT } = process.env;

const LOG_LEVEL = (DEVELOPMENT=='true') ? 'info' : 'info';

const logger = createLogger({
    transports: [
        new transports.File({
            filename: "log.json",
            level: LOG_LEVEL || 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
})

export default logger;

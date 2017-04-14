let log4 = require('./config')

function logger(name) {
    let logger = log4.getLogger(name)
    logger.setLevel('INFO')
    return logger
}
/*
 * log.trace('trace: index page')
 * log.debug('debug: index page')
 * log.info('info: index page')
 * log.warn('warn: index page')
 * log.error('error: index page')
 * log.fatal('fatal: index page')
 */
module.exports = logger

const CONSTANT = require('../src/property')
const pino = require('pino')

const logger = pino({
    formatters: {
        bindings() {
            return {
                application: `${CONSTANT.TEAM}-${CONSTANT.NAME_APP}`,
                environment: `${CONSTANT.ENV}`,
                version: `${CONSTANT.VERSION}`
            }
        },
        level(label) {
            return {
                log_level: label.toUpperCase()
            }
        }
    },
    timestamp: () => `, "date":"${new Date().toISOString()}"`,
    messageKey: 'log_message'
})

module.exports = logger
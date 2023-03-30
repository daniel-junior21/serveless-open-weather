const handler = require('.')

const event = ''

handler.handler(event)
    .then((res) => {
        console.log('Local res: ', res)
    })
    .catch((err) => {
        console.log('Local res: ', err)
    })
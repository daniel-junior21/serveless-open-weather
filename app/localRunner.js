const handler = require('.');

const event = {
    body: JSON.stringify({
        latitude: '-23.5557714',
        longitude: '-46.6395571',
        unitMeasurement: 'metric',
    })
}

handler.handler(event)
    .then((res) => {
        console.log('Local res: ', res);
    })
    .catch((err) => {
        console.log('Local res: ', err);;
    })
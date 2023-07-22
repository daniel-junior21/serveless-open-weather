const axios = require('axios');
const CONSTANT = require('../property');

exports.getCurrentWeather = (bodyData) => {
    const config = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${bodyData.latitude}&lon=${bodyData.longitude}&units=${bodyData.unitMeasurement}&appid=${CONSTANT.OPEN_WEATHER_API_KEY}`,
    }

    return axios(config).then((response) => {
        logger.info('[openWeatherApi - Response]: ' + JSON.stringify(response.data));
        return {
            statusCode: response.status,
            body: response.data
        }
    }).catch((error) => {
        logger.error('[openWeatherApi - Exception]: ' + JSON.stringify(error.response.data));
        return {
            statusCode: error.response.status,
            body: error.response.data
        }
    })
}
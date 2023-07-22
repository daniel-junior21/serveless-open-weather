const controller = require('./src/controller');

global.logger = require('./config/logger');

module.exports.handler = async (event) => {
    const responseData = await controller.openWeatherController.getCurrentWeather(event);

    const response = {
        statusCode: responseData.statusCode,
        body: JSON.stringify(responseData.body)
    }

    return response;
}
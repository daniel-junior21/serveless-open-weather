const api = require('../api');
const factory = require('../factory');

exports.getCurrentWeather = async (event) => {
    try {
        logger.info('[openWeatherController - Request Body]: ' + event.body);
        const bodyData = JSON.parse(event.body);

        const openWeatherResponse = await api.openWeatherApi.getCurrentWeather(bodyData);

        logger.info('[openWeatherController - Response Body]: ' + JSON.stringify(openWeatherResponse));
        switch(openWeatherResponse.statusCode) {
            case 200:
                return factory.responseFactory.success(openWeatherResponse);
            case 400:
                return factory.responseFactory.invalidPayload();
            case 401:
                return factory.responseFactory.unauthorized();
            default:
                return factory.responseFactory.error();
        }

    } catch (err) {
        logger.error('[openWeatherController - Exception]: ' + err);
        return factory.responseFactory.error();
    }

}
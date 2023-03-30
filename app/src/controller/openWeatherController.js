const api = require('../api')

exports.getCurrentWeather = async (event) => {
    try{
        const openWeatherResponse = await api.openWeatherApi.getCurrentWeather(event)

        return openWeatherResponse
    } catch (err) {
        console.log(err)
    }

}
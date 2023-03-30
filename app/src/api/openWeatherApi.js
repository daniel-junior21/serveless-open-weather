const axios = require('axios')

exports.getCurrentWeather = (event) => {
    const config = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?lat={lat}}&lon={lon}&units={unit}&appid={api key}`,
    }

    return axios(config).then((response) => {
        console.log(response)
        return {
            statusCode: response.status,
            body: response.data
        }
    }).catch((error) => {
        console.log(error)
        return {
            statusCode: error.status,
            body: error.data
        }
    })
}
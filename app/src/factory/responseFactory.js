exports.error = () => {
    return {
        statusCode: 500,
        body: {
            status: 'Internal server error! Please contact support.'
        }
    }
}
exports.invalidPayload = () => {
    return {
        statusCode: 400,
        body: {
            status: 'Latitude or Longitude are missing or invalid.'
        }
    }
}
exports.success = (data) => {
    return {
        statusCode: data.statusCode,
        body: data.body
    }
}
exports.unauthorized = () => {
    return {
        statusCode: 401,
        body: {
            status: 'Unauthorized'
        }
    }
}
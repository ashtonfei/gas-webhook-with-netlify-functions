const axios = require('axios')

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        try {
            const token = event.queryStringParameters.token
            if (token === process.env.TOKEN) {
                const url = `${process.env.GAS_API}?token=${token}`
                const response = await axios.post(url, event.body)
                return {
                    statusCode: 200,
                    body: JSON.stringify(response.data),
                }
            } else {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: `Invalid token` }),
                }
            }

        } catch (err) {
            return { statusCode: 500, body: err.toString() }
        }
    } else {
        return {
            statusCode: 500, body: JSON.stringify({ error: 'Invaid HTTP Method' })
        }
    }
}

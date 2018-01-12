const handleMessage = (event, context, callback) => {
  // const body = JSON.parse(event.body)
  callback(null, { statusCode: 200, body: process.env.GLIP_API_SERVER + ' ' + process.env.GLIP_API_TOKEN })
}

module.exports = { handleMessage }

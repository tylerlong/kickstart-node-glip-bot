const handleMessage = (event, context, callback) => {
  const body = JSON.parse(event.body)
  callback(null, { statusCode: 200, body: JSON.stringify(body, null, 2) })
}

module.exports = { handleMessage }

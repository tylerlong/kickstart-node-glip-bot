const RingCentral = require('ringcentral-js-concise')

const handleMessage = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const message = body.body
  const token = JSON.parse(process.env.GLIP_API_TOKEN)
  if (message && message.creatorId !== token.owner_id) {
    // const rc = new RingCentral('', '', process.env.GLIP_API_SERVER)
    // rc.token(token)
    // rc.post('/restapi/v1.0/glip/posts', {
    //   groupId: message.groupId,
    //   text: JSON.stringify(message, null, 2),
    //   attachments: undefined
    // })
  }
  // callback(null, { statusCode: 200, body: event.headers })
  callback(null, { statusCode: 200, body: JSON.stringify(event.headers, null, 2) })
}

module.exports = { handleMessage }

const RingCentral = require('ringcentral-js-concise')

const rc = new RingCentral('', '', process.env.GLIP_API_SERVER)
rc.token(JSON.parse(process.env.GLIP_API_TOKEN))

const handleMessage = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const message = body.body
  if (message && message.creatorId !== rc.token().owner_id) {
    rc.post('/restapi/v1.0/glip/posts', {
      groupId: message.groupId,
      text: JSON.stringify(message, null, 2),
      attachments: undefined
    })
  }
  callback(null, { statusCode: 200, body: event.header })
}

module.exports = { handleMessage }

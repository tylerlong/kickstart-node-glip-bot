import RingCentral from 'ringcentral-js-concise'

const token = JSON.parse(process.env.GLIP_API_TOKEN)
const rc = new RingCentral('', '', process.env.GLIP_API_SERVER)
rc.token(token)

const handleMessage = (event, context, callback) => {
  callback(null, { statusCode: 200, body: '', headers: { 'Validation-Token': event.headers['Validation-Token'] } })
  if (event.body === null) {
    return
  }
  const message = JSON.parse(event.body).body
  if (message && message.creatorId !== token.owner_id) {
    rc.post('/restapi/v1.0/glip/posts', {
      groupId: message.groupId,
      text: JSON.stringify(message, null, 2),
      attachments: undefined
    })
  }
}

module.exports = { handleMessage }

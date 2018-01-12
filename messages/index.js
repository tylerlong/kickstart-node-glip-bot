import RingCentral from 'ringcentral-js-concise'

const handleMessage = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const message = body.body
  const token = JSON.parse(process.env.GLIP_API_TOKEN)
  if (message && message.creatorId !== token.owner_id) {
    const rc = new RingCentral('', '', process.env.GLIP_API_SERVER)
    rc.token(token)
    await rc.post('/restapi/v1.0/glip/posts', {
      groupId: message.groupId,
      text: JSON.stringify(message, null, 2),
      attachments: undefined
    })
  }
  callback(null, { statusCode: 200, body: '', headers: { 'validation-token': event.headers['validation-token'] } })
}

module.exports = { handleMessage }

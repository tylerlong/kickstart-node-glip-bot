const dotenv = require('dotenv')
const express = require('express')
const RingCentral = require('ringcentral-js-concise')
const bodyParser = require('body-parser')

dotenv.config()
const rc = new RingCentral('', '', process.env.GLIP_API_SERVER)
rc.token(JSON.parse(process.env.GLIP_API_TOKEN))

const sendGlipMessage = async (groupId, text, attachments) => {
  try {
    await rc.post('/restapi/v1.0/glip/posts', { groupId, text, attachments })
  } catch (e) {
    console.error(e.response.data)
  }
}

const app = express()
app.use(bodyParser.json())
app.post('/webhook', async (req, res) => {
  const message = req.body.body
  if (message && message.type === 'TextMessage' && message.creatorId !== rc.token().owner_id) {
    await sendGlipMessage(message.groupId, `I have received: ${message.text}`)
  }
  res.set('validation-token', req.get('validation-token'))
  res.send('')
})

app.listen(3000)

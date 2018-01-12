app.post('/webhook', async (req, res) => {
  const message = req.body.body
  if (message && message.creatorId !== rc.token().owner_id) {
    await sendGlipMessage(message.groupId, JSON.stringify(message, null, 2))
  }
  res.set('validation-token', req.get('validation-token'))
  res.send('')
})

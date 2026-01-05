const axios = require('axios')

module.exports = {
  command: ['ytmp3'],
  run: async ({ sock, msg, args }) => {
    if (!args[0])
      return sock.sendMessage(
        msg.key.remoteJid,
        { text: '❌ URL required' },
        { quoted: msg }
      )

    const url = args[0]

    const res = await axios.get(
      `https://api.example.com/ytmp3?url=${url}`,
      { timeout: 15000 }
    )

    await sock.sendMessage(
      msg.key.remoteJid,
      {
        audio: { url: res.data.result },
        mimetype: 'audio/mpeg'
      },
      { quoted: msg }
    )
  }
}

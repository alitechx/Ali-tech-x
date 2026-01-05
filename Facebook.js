const axios = require('axios')

module.exports = {
  command: ['facebook', 'fb'],
  run: async ({ sock, msg, args }) => {
    if (!args[0]) return

    const res = await axios.get(
      `https://api.example.com/facebook?url=${args[0]}`
    )

    await sock.sendMessage(
      msg.key.remoteJid,
      {
        video: { url: res.data.video },
        caption: '🔥 DRAGON-MD'
      },
      { quoted: msg }
    )
  }
}

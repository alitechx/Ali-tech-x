const axios = require('axios')

module.exports = {
  command: ['tiktok','tt'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ URL required'},{quoted:msg})

    const url = args[0]

    const res = await axios.get(`https://api.example.com/tiktok?url=${url}`,{timeout:15000})

    await sock.sendMessage(msg.key.remoteJid,{
      video: { url: res.data.result },
      caption: '🔥 DRAGON-MD'
    },{quoted:msg})
  }
}

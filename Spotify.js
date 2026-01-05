const axios = require('axios')

module.exports = {
  command: ['spotify','sp'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Song name required'},{quoted:msg})

    const query = encodeURIComponent(args.join(' '))

    const res = await axios.get(`https://api.example.com/spotify?query=${query}`,{timeout:15000})

    await sock.sendMessage(msg.key.remoteJid,{
      audio: { url: res.data.result },
      mimetype: 'audio/mpeg'
    },{quoted:msg})
  }
}

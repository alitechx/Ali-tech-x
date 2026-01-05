const axios = require('axios')

module.exports = {
  command: ['mediafire','mf'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ URL required'},{quoted:msg})

    const url = args[0]

    const res = await axios.get(`https://api.example.com/mediafire?url=${url}`,{timeout:15000})

    await sock.sendMessage(msg.key.remoteJid,{
      document: { url: res.data.result },
      fileName: 'DRAGON-MD_File',
      mimetype: 'application/octet-stream'
    },{quoted:msg})
  }
}

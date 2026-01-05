const axios = require('axios')

module.exports = {
  command: ['fancy','tts','base64','unbase64','trt'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Provide text'}, {quoted:msg})
    const text = encodeURIComponent(args.join(' '))
    const res = await axios.get(`https://api.example.com/texttool?text=${text}`,{timeout:15000})
    await sock.sendMessage(msg.key.remoteJid,{text:res.data.result},{quoted:msg})
  }
}

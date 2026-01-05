const axios = require('axios')

module.exports = {
  command: ['define','news','movie','weather'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Provide query'}, {quoted:msg})
    const query = encodeURIComponent(args.join(' '))
    const res = await axios.get(`https://api.example.com/search?type=${msg.body.split(' ')[0]}&query=${query}`,{timeout:15000})
    await sock.sendMessage(msg.key.remoteJid,{text:res.data.result},{quoted:msg})
  }
}

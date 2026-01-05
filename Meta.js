const axios = require('axios')

module.exports = {
  command: ['bard','meta','felo'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Ask something'},{quoted:msg})
    const query = encodeURIComponent(args.join(' '))
    const res = await axios.get(`https://api.example.com/meta?query=${query}`,{timeout:15000})
    await sock.sendMessage(msg.key.remoteJid,{text:res.data.result},{quoted:msg})
  }
}

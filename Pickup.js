const axios = require('axios')

module.exports = {
  command: ['pickup','flirt'],
  run: async ({ sock, msg }) => {
    const res = await axios.get('https://api.example.com/pickup',{timeout:10000})
    await sock.sendMessage(msg.key.remoteJid,{text:res.data.line},{quoted:msg})
  }
}

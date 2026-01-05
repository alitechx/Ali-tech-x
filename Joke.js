const axios = require('axios')

module.exports = {
  command: ['joke','funny'],
  run: async ({ sock, msg }) => {
    const res = await axios.get('https://api.example.com/joke',{timeout:10000})
    await sock.sendMessage(msg.key.remoteJid,{text:res.data.joke},{quoted:msg})
  }
}

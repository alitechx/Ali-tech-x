const axios = require('axios')

module.exports = {
  command: ['colorize','profilecard','watermark'],
  run: async ({ sock, msg, args }) => {
    if(!msg.quoted || !msg.quoted.image) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Reply to an image'}, {quoted:msg})
    const imgBuffer = await sock.downloadMediaMessage(msg.quoted)
    const res = await axios.post(`https://api.example.com/editimage`,imgBuffer,{responseType:'arraybuffer'})
    await sock.sendMessage(msg.key.remoteJid,{image:res.data,caption:'✅ Edited'}, {quoted:msg})
  }
}

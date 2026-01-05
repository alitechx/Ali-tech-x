const axios = require('axios')

module.exports = {
  command: ['image','imagine','imagine2','aiart'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Provide a query'},{quoted:msg})
    const query = encodeURIComponent(args.join(' '))
    const res = await axios.get(`https://api.example.com/image?query=${query}`,{timeout:15000})
    await sock.sendMessage(msg.key.remoteJid,{image:{url:res.data.result},caption:'🖼 DRAGON-MD'},{quoted:msg})
  }
}

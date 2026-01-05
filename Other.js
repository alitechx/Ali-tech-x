const axios = require('axios')

module.exports = {
  command: ['timenow','date','count','calculate','country','currency','countx'],
  run: async ({ sock, msg, args }) => {
    const cmd = msg.body.split(' ')[0].replace('.','')
    if(cmd === 'timenow' || cmd === 'date') {
      const now = new Date()
      await sock.sendMessage(msg.key.remoteJid,{text:now.toString()},{quoted:msg})
    } else if(cmd === 'calculate'){
      try {
        const result = eval(args.join(' '))
        await sock.sendMessage(msg.key.remoteJid,{text:`🧮 Result: ${result}`},{quoted:msg})
      } catch(e){
        await sock.sendMessage(msg.key.remoteJid,{text:'❌ Invalid expression'},{quoted:msg})
      }
    } else {
      const res = await axios.get(`https://api.example.com/other?cmd=${cmd}&query=${args.join(' ')}`,{timeout:15000})
      await sock.sendMessage(msg.key.remoteJid,{text:res.data.result},{quoted:msg})
    }
  }
}

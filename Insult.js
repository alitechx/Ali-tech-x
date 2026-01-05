module.exports = {
  command: ['insult'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Tag someone'}, {quoted:msg})
    const insults = ['You look funny 😜','Stop being lazy 😎','LOL 😂']
    const text = insults[Math.floor(Math.random()*insults.length)]
    await sock.sendMessage(msg.key.remoteJid,{text:`@${args[0]} ${text}`, mentions:[args[0]]},{quoted:msg})
  }
}

module.exports = {
  command: ['block','unblock'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Tag a number'},{quoted:msg})
    const jid = args[0].includes('@s.whatsapp.net') ? args[0] : `${args[0]}@s.whatsapp.net`
    
    if(msg.body.startsWith('.block')){
      await sock.updateBlockStatus(jid,'block')
      await sock.sendMessage(msg.key.remoteJid,{text:`✅ Blocked ${args[0]}`},{quoted:msg})
    } else {
      await sock.updateBlockStatus(jid,'unblock')
      await sock.sendMessage(msg.key.remoteJid,{text:`✅ Unblocked ${args[0]}`},{quoted:msg})
    }
  }
}

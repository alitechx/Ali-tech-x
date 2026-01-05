module.exports = {
  command: ['kick','add'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Tag a user'},{quoted:msg})
    const jid = args[0].includes('@s.whatsapp.net') ? args[0] : `${args[0]}@s.whatsapp.net`
    if(msg.body.startsWith('.kick')){
      await sock.groupParticipantsUpdate(msg.key.remoteJid,[jid],'remove')
      await sock.sendMessage(msg.key.remoteJid,{text:`✅ Kicked ${args[0]}`},{quoted:msg})
    } else {
      await sock.groupParticipantsUpdate(msg.key.remoteJid,[jid],'add')
      await sock.sendMessage(msg.key.remoteJid,{text:`✅ Added ${args[0]}`},{quoted:msg})
    }
  }
}

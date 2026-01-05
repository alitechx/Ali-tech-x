module.exports = {
  command: ['promote','demote'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Tag a user'},{quoted:msg})
    const jid = args[0].includes('@s.whatsapp.net') ? args[0] : `${args[0]}@s.whatsapp.net`
    if(msg.body.startsWith('.promote')){
      await sock.groupParticipantsUpdate(msg.key.remoteJid,[jid],'promote')
      await sock.sendMessage(msg.key.remoteJid,{text:`✅ Promoted ${args[0]}`},{quoted:msg})
    } else {
      await sock.groupParticipantsUpdate(msg.key.remoteJid,[jid],'demote')
      await sock.sendMessage(msg.key.remoteJid,{text:`✅ Demoted ${args[0]}`},{quoted:msg})
    }
  }
}

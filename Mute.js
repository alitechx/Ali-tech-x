module.exports = {
  command: ['mute','unmute'],
  run: async ({ sock, msg }) => {
    if(msg.body.startsWith('.mute')){
      await sock.groupSettingUpdate(msg.key.remoteJid,'announcement')
      await sock.sendMessage(msg.key.remoteJid,{text:'🔇 Group muted'},{quoted:msg})
    } else {
      await sock.groupSettingUpdate(msg.key.remoteJid,'not_announcement')
      await sock.sendMessage(msg.key.remoteJid,{text:'🔊 Group unmuted'},{quoted:msg})
    }
  }
}

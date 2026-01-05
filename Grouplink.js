module.exports = {
  command: ['grouplink','link'],
  run: async ({ sock, msg }) => {
    const link = await sock.groupInviteCode(msg.key.remoteJid)
    await sock.sendMessage(msg.key.remoteJid,{text:`🌐 Group Link: https://chat.whatsapp.com/${link}`},{quoted:msg})
  }
}

module.exports = {
  command: ['sticker','sticker2','emojimix','tomp3'],
  run: async ({ sock, msg }) => {
    if(!msg.quoted) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Reply to media'}, {quoted:msg})
    const media = await sock.downloadMediaMessage(msg.quoted)
    // Convert logic here (sticker/audio)
    await sock.sendMessage(msg.key.remoteJid,{sticker: media},{quoted:msg})
  }
}

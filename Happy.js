module.exports = {
  command: ['happy'],
  run: async ({ sock, msg }) => {
    const reactions = ['😀','😁','😆','😎','🥳']
    const text = reactions[Math.floor(Math.random()*reactions.length)]
    await sock.sendMessage(msg.key.remoteJid,{text},{quoted:msg})
  }
}

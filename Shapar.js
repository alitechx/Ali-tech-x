module.exports = {
  command: ['shapar'],
  run: async ({ sock, msg, args }) => {
    const phrases = ['Hello!', 'How are you?', 'Nice to meet you!', '🔥 DRAGON-MD']
    const text = phrases[Math.floor(Math.random()*phrases.length)]
    await sock.sendMessage(msg.key.remoteJid,{text},{quoted:msg})
  }
}

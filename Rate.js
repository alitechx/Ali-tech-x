module.exports = {
  command: ['rate'],
  run: async ({ sock, msg, args }) => {
    if(!args[0]) return sock.sendMessage(msg.key.remoteJid,{text:'❌ Tag a user'}, {quoted:msg})
    const random = Math.floor(Math.random()*101)
    await sock.sendMessage(msg.key.remoteJid,{text:`💯 I rate ${args[0]} : ${random}/100`},{quoted:msg})
  }
}

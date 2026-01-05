const { exec } = require('child_process')

module.exports = {
  command: ['restart','shutdown'],
  run: async ({ sock, msg }) => {
    const action = msg.body.startsWith('.restart') ? 'Restarting' : 'Shutting down'
    await sock.sendMessage(msg.key.remoteJid,{text:`⚡ ${action}...`},{quoted:msg})
    exec('pm2 restart all', (err) => { if(err) console.log(err) })
  }
}

const fs = require('fs')

module.exports = {
  command: ['menu'],
  run: async ({ sock, msg }) => {
    const menu = JSON.parse(
      fs.readFileSync('./menu/main.json')
    )

    let text = `🔥 ${menu.title}\n\n`
    menu.commands.forEach(c => {
      text += `• ${c}\n`
    })

    await sock.sendMessage(
      msg.key.remoteJid,
      { text },
      { quoted: msg }
    )
  }
}

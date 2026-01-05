const fs = require('fs')

module.exports = {
  command: ['setpp'],
  run: async ({ sock, msg }) => {
    const image = fs.readFileSync('./assets/dragon-md.jpg')

    await sock.updateProfilePicture(
      sock.user.id,
      image
    )

    await sock.sendMessage(
      msg.key.remoteJid,
      { text: '✅ DRAGON-MD pic updated' },
      { quoted: msg }
    )
  }
}

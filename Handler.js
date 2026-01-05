const fs = require('fs')
const path = require('path')
const config = require('./config')

module.exports = async (sock, msg) => {
  const text =
    msg.message.conversation ||
    msg.message.extendedTextMessage?.text ||
    ''

  if (!text.startsWith(config.prefix)) return

  const args = text.slice(1).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  const folders = fs.readdirSync('./commands')

  for (const folder of folders) {
    const files = fs.readdirSync(`./commands/${folder}`)
    for (const file of files) {
      const cmd = require(`./commands/${folder}/${file}`)
      if (cmd.command.includes(command)) {
        return cmd.run({ sock, msg, args })
      }
    }
  }
}

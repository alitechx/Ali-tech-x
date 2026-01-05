const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

const Pino = require('pino')
const { Boom } = require('@hapi/boom')
const handler = require('./handler')
const config = require('./config')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('session')

  const sock = makeWASocket({
    auth: state,
    logger: Pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['DRAGON-MD', 'Chrome', '1.0.0']
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('messages.upsert', async ({ messages }) => {
    try {
      const msg = messages[0]
      if (!msg.message) return
      await handler(sock, msg)
    } catch (e) {
      console.log(e)
    }
  })

  sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode
      if (reason !== DisconnectReason.loggedOut) {
        startBot()
      }
    }
    if (connection === 'open') {
      console.log('🔥 DRAGON-MD CONNECTED')
    }
  })
}

startBot()

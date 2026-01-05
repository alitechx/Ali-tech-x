module.exports = {
  command: ['flip','coinflip','roll','rcolor','fact'],
  run: async ({ sock, msg }) => {
    const outcomes = {
      flip: ['Heads','Tails'],
      coinflip: ['🪙 Heads','🪙 Tails'],
      roll: [`${Math.floor(Math.random()*6)+1}`],
      rcolor: [`#${Math.floor(Math.random()*16777215).toString(16)}`],
      fact: ['💡 Fun Fact: Honey never spoils!','💡 Fun Fact: Octopus has 3 hearts!']
    }
    const cmd = msg.body.split(' ')[0].replace('.','')
    const text = outcomes[cmd][Math.floor(Math.random()*outcomes[cmd].length)]
    await sock.sendMessage(msg.key.remoteJid,{text},{quoted:msg})
  }
}

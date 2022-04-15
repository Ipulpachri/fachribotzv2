let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
𝙎𝘾 𝙊𝙍𝙄 𝘽𝙔 𝙇𝙔𝙉𝙓𝙕𝙔 🔥
Recode By Fachri

- 
*Private Bg*
`.trim(), '© ᴹᴿ᭄ Fachri botz ×፝֟͜×', 'Makasih', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler

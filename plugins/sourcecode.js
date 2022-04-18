let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
◪ 🖥️ *SCRIPT BOT*
│ *SC Recode :* 
│ ╰ *Private*
│ *SC Ori :* 
│ ╰ https://github.com/LynnXzy/scbotz-v1
│ *RestApi :* 
╰──────────═┅═──────────
📍 *NOTE :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star & kasih credit
`.trim(), '© ᴹᴿ᭄ Fachri botz ×፝֟͜×', 'Makasih', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler

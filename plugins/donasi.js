let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*─────── 「 DONATE 」 ─────*

╭═══════════════
║╭───✧ [ DONASI • NON MONEY ] ✧───
║│➵͜͡✪ _*Pulsa • Indosat*_ : 
║│- 08159917553
║│➵͜͡✪ _*Dana*_ : 
║│- 085713041886
║│
║│ *Kirim Bukti Ke Owner*
║│✆ wa.me/6285713041886
║╰────────────···✧
╰═══════════════
`.trim(), 'Donasi Bg Biar Bot Ny On 24 Jam', 'Owner Bot👤', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭══════════════════════
║╭─✧ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ✧─
║│➸ *Nama* : Fachri
║│➸ *Kelamin* : Lelaki
║│➸ *Tempat Tinggal* :
║│➸ Indonesia
║│➸ *Agama* : Islam
║│➸ *Umur* : 14
║│➸ *Kelas* : 8.Smp/cml.4
║│➸ *Status* : jomblo anj
║│➸ Anime,bulutangkis,Coding
║╰────────────────────
╰══════════════════════
╭══════════════════════
║╭─✧ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ✧──
║│➸ *No.Owner* : 
║│✆ wa.me/6285713041886
║│➸ *No.Bot* : 
║│➸ wa.me/
║│➸ *Chanel Youtube* : 
║│➸ https://youtube.com/c/SaefulFahri
║│➸ *Gmail* : Xnxx@gmail.com
║│➸ *Github* : 
║╰───────────────────── 
╰═══════════════════════

_Oke segitu aja_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Biodata')).buffer(), ext, 'Sc By Fachri', 'Nomor Owner👤', '.owner', 'Donasi💰', '.donasi', 'Sewa Bot🤖', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let str = `
╭═════════════════
║╭─✧ [ 𝐈𝐍𝐅𝐎𝐁𝐎𝐓 ] ✧───
║│➵͜͡✪ NameBot: FachriBotz
║│➵͜͡✪ Main Owner: Fachri
║│➵͜͡✪ Operated Since: Jum'at, 15 April 2022
║│➵͜͡✪ Language Used: Nodejs (JS)
║│➵͜͡✪ Server: Heroku
║╰───────────────···✧
╰════════════════

╭═════════════════
║╭──✧ [ 𝐒𝐓𝐀𝐓𝐔𝐒 ] ✧──
║│➵͜͡✪ Aktif selama ${uptime}
║│➵͜͡✪ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
║│➵͜͡✪ *${groups.length}* Grup
║│➵͜͡✪ *${chats.length - groups.length}* Chat Pribadi
║│➵͜͡✪ *${Object.keys(global.db.data.users).length}* Pengguna
║│➵͜͡✪ *${totaljadibot.length}* Jadibot
║│➵͜͡✪ *${conn.blocklist.length}* Terblock
║│➵͜͡✪ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
║│➵͜͡✪ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
║╰───────────────···✧
╰════════════════

╭════════════════
║╭──✧ [ 𝐏𝐄𝐍𝐆𝐀𝐓𝐔𝐑𝐀𝐍 ] ✧─
║│➸ ${anon ? '✅' : '❌'} *Anon Chat*
║│➸ ${anticall ? '✅' : '❌'} *Anti Call*
║│➸ ${antispam ? '✅' : '❌'} *Anti Spam*
║│➸ ${antitroli ? '✅' : '❌'} *Anti Troli*
║│➸ ${backup ? '✅' : '❌'} *Auto Backup DB*
║│➸ ${groupOnly ? '✅' : '❌'} *Mode Grup*
║│➸ ${jadibot ? '✅' : '❌'} *Jadi Bot*
║│➸ ${nsfw ? '✅' : '❌'} *Mode Nsfw*
║╰─────────────────···✧
╰══════════════════`.trim()
     await conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), str, '© ᴹᴿ᭄ Fachri botz ×፝֟͜×', 'Owner👤', '.owner', 'Menu🧾', '.menu', m)
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

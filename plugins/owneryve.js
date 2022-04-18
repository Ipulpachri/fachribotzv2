let handler = function (m) {
	this.sendContact(m.chat, '6285713041886', 'Owner FachriBotz', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, isMods }) {

if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0

if (m.text.includes('serbot') || m.text.includes('code') || m.text.includes('--code') || m.text.includes('subbot') || m.text.includes('qr')) return !0

const chat = global.db.data.chats[m.chat]
const bot = global.db.data.settings[this.user.jid] || {}

const senderNumber = m.sender.split('@')[0]
const forbiddenPrefixes = ["212", "265", "234", "258", "263", "93", "967", "92", "254", "213" ,"505"]

if (bot.antiPrivate2 && !isOwner && !isROwner && !isMods) {

const isForbiddenPrefix = forbiddenPrefixes.some(prefix => senderNumber.startsWith(prefix))

let reason = isForbiddenPrefix ? `Dejen De Joder 🥰.` : `Está Prohibido Escribir Al Privado Del Bot 🪐.`

await m.reply(`> 《★》@${senderNumber} ${reason}\n\n- \`Si deseas probar el bot, sigue el canal oficial:\`\n> ${channel}`, false, { mentions: [m.sender] })
await this.updateBlockStatus(m.chat, 'block')

return !0
}

return !1
}
//

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(`🚩 Etiqueta a un usuario.`)
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `🚩 @${who.split`@`[0]} ha sido baneado con exito, ya no podrá volver a usar mis comandos.`, m, { mentions: [who] })
}
handler.help = ['mban *@user*']
handler.tags = ['owner']
handler.command = /^mban$/i
handler.botAdmin = false;
handler.admin = true;
handler.group = true;


export default handler
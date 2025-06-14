let handler = async (m, { conn, usedPrefix, command}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let yaemori = `☃️ *Respeta las reglas de Mafia-Ai-Bot*\n
✰ No Llamar Al Bot
✰ No Hacer Spam
✰ Contacta Al Creador Si Es Necesario .owner
✰ Comprar Licencia Para Añadir Al Bot A Un Grupo

☃️ 𝗡𝗼𝘁𝗮: *Si No Cumples Con Las Reglas Del Bot, Seras Bloqueado.*

☃️ 𝗔𝘃𝗶𝘀𝗼: *Puedes Apoyarnos Donando Al Yape .donar.*

${global.md}`.trim()
await conn.reply(m.chat, yaemori, m, fake)

}
handler.help = ['botreglas']
handler.tags = ['main']
handler.command = ['botreglas', 'reglasdelbot', 'reglasbot', 'reglas']
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
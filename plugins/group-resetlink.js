let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🚩 Se restableció con éxito el link del grupo.\n*-* Link Nuevo: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'anularlink'] 
handler.botAdmin = false;
handler.admin = true;
handler.group = true;

export default handler
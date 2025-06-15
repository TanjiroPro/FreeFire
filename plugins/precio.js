let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setprecios) {
        let precios = chat.setprecios;
        await conn.reply(m.chat, precios, m);
    } else {
        m.reply(`> Actualiza Tu Lista De Precios Con .setprecios`);
    }
}
handler.command = ['precios'];
handler.help = ["precios"];
handler.tags = ["main"];
handler.group = true;
export default handler;

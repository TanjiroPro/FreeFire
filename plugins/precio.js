let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setprecios) {
        let precios = chat.setprecios;
        await conn.reply(m.chat, precios, m);
    } else {
        m.reply(`> 𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙋𝙧𝙤𝙢𝙤𝙨, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩precios 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.🥖`);
    }
}
handler.command = ['precios'];
handler.help = ["precios"];
handler.tags = ["main"];
handler.group = true;
export default handler;

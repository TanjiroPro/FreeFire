let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setprecio) {
        let precio = chat.setprecio;
        await conn.reply(m.chat, precio, m);
    } else {
        m.reply(`> 𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝘾𝙤𝙢𝙥𝙖𝙧, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩precio 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.🥖`);
    }
}
handler.command = ['precio'];
handler.group = true;
export default handler;

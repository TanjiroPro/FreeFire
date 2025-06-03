const handler = async (m, { conn }) => {
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  conn.sendMessage(m.chat, {
text: `¡ Hola Bienvenido !\n\n¿Deseas tener Bot Permanente O Perzonalizado A Gusto??\n¡@jxznr_szz te puede a ayudar hacerlo realidad!\nñPersonaliza tu experiencia de WhatsApp como nunca antes con el mejor bot, recuerda que tbm aceptamos diamamtes\`Mafia Bot\`\n\n*\`PRECIOS DEL BOT\`*\n\n\`\`\`PERMAMENTE\`\`\`\n> *ᴜɴ ɢʀᴜᴘᴏ:*\n- 4 🇵🇪/𝟣2𝟢𝟢 🇦🇷\n> *ᴛʀᴇs ɢʀᴜᴘᴏs:*\n- 8 🇵🇪/𝟤5𝟢𝟢 🇦🇷\n> *sᴇɪs ɢʀᴜᴘᴏs:*\n- 𝟣4 🇵🇪/48𝟢𝟢 🇦🇷\n\n\`\`\`MENSUAL\`\`\`\n- 3 🇵🇪/𝟫𝟢𝟢 🇦🇷\n\n\`\`\`PERSONALIZADO\`\`\`\n- 2𝟧 🇵🇪/9𝟢𝟢𝟢 🇦🇷\n\n\`\`\`Mafia Bot Compras \`\`\`\nhttps://chat.whatsapp.com/JUraAM0lZyB89FXbsywP9m\n\n> ${dev}`,
mentions: [m.sender]
}, { quoted: fkontak });
};
handler.help = ['preciobot']
handler.tags = ['main'] 
handler.command = ['preciobot', 'comprar2', 'adquirir2', 'personalizado'];
export default handler;
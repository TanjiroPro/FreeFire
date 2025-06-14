import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
• 𝐒𝐂𝐑𝐈𝐌 •

⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎                       •
🇲🇽 𝐌𝐄𝐗𝐈𝐂𝐎 : 
🇨🇴 𝐂𝐎𝐋𝐎𝐌𝐁𝐈𝐀 :                

➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: 
➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:

      𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
    
    👑 ┇ 
    🥷🏻 ┇  
    🥷🏻 ┇ 
    🥷🏻 ┇  
    
    ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
    🥷🏻 ┇ 
    🥷🏻 ┇
                 
` 
}
handler.help = ['scrim']
handler.tags = ['freefireeu']
handler.command = /^(scrim)$/i
handler.botAdmin = false;
handler.admin = true;
handler.group = true;
export default handler
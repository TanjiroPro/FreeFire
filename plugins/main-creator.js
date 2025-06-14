
import PhoneNumber from 'awesome-phonenumber';

async function handler(m, { conn }) { 
    let numcreador = '51936994155';
    let ownerJid = numcreador + '@s.whatsapp.net';

    let name = await conn.getName(ownerJid) || 'Owner'; 
    let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Creador de bots de WhatsApp y del Bot Mafia Ai';
    let empresa = 'Mafia - Servicios Tecnológicos';
    let imagen = 'https://qu.ax/cvMfW.png'; // Reemplaza con la URL de la imagen que deseas mostrar

    // Enviar imagen junto con el número del dueño y sus detalles
    await conn.sendMessage(m.chat, { 
        image: { url: imagen },
        caption: `👤 *Dueño del bot*\n📌 *Nombre:* ${name}\n📞 *Número:* wa.me/${numcreador}\n📝 *Descripción:* ${about}\n🏢 *Empresa:* ${empresa}\n📧 *Email:* yallico2024@gmail.com\n🌐 *Instagram:* https://www.instagram.com/jxznr_szz`,
    }, { quoted: m });
}

handler.help = ['owner']; 
handler.tags = ['main']; 
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;

var handler = async (m, { command }) => {
    if (command === 'canal') {
        const canalLink = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'; // Reemplaza esto con tu enlace real
        conn.reply(m.chat, `¡Aquí está el enlace de mi canal! 👉 ${canalLink}`, m);
    }
};
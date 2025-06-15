let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setprecios = text
        conn.reply(m.chat, '> Tu Lista a Sido Actualizada Correctamente Pon .precios Para Ver La Lista 🥖', m)
    } else throw `> Para Actualizar Tu Lista Debes Poner Lo Siguiente .setprecios + Tu Lista\n> Ejemplo :\n.setprecios 1 bot = 5soles`
}

handler.command = ['setprecios']
handler.admin = true
handler.group = true
export default handler

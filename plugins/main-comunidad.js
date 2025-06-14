const handler = async (m, { conn }) => {
  let gifUrl = "https://qu.ax/cvMfW.png";

  let text = `
 ──────── ⚔ ────────  
     *COMUNIDAD*  
──────── ⚔ ────────  

*Bot Mafia*  
• ,👥➤ **Grupo de WhatsApp de la comunidad de Bot Mafia Ai**  
   Únete para compartir y resolver dudas con otros usuarios. 
  ➤https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m

• 📢 ➤ *Canal de Bot Mafia Ai*  
   Recibe actualizaciones, noticias y lanzamientos del bot.  
https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m
• 💬 ➤ *Grupo de WhatsApp activo*  
   Chatea con usuarios en tiempo real y sé parte de la conversación y usa al bot que esta de uso libre.  
➤https://chat.whatsapp.com/Cwl3UJdq6AH90xoECBHxhC

──────── ⚔ ────────  
🔍 *¿Sabías que...?* 
- El bot Mafia Ai es actualizado regularmente para mejorar su desempeño.  
- Puedes sugerir mejoras o reportar errores directamente en los grupos.  
- Nuestra comunidad sigue creciendo y cuenta con soporte activo.  
-
`.trim();


  await conn.sendMessage(
    m.chat,
    {
      video: { url: gifUrl },
      gifPlayback: true, 
      caption: text,
      mentions: [m.sender], 
    },
    { quoted: m }
  );
};

handler.command = /^(comunidad)$/i; 
export default handler;
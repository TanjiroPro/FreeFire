const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*👑 La descripción del grupo se modifico correctamente*');
};
handler.help = ['groupdesc <text>'];
handler.tags = ['grupo'];
handler.command = ['gpdesc', 'groupdesc']
handler.botAdmin = false;
handler.admin = true;
handler.group = true;

export default handler;
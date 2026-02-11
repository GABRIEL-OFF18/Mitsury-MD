let handler = async (m, { conn }) => {
  try {
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: 'https://files.catbox.moe/69ubjx.aac' },
        mimetype: 'audio/aac',
        ptt: false
      },
      {
        quoted: m,
        newsletterJid: '120363417186717632@newsletter'
      }
    )
  } catch (e) {
    console.error(e)
    m.reply('❌ Error al enviar el audio')
  }
}

handler.help = ['pad']
handler.tags = ['audio']
handler.command = ['pad']

export default handler
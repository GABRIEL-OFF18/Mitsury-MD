import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  if (!args[0]) {
    return m.reply('📌 *Usa:* .tiktok <link de TikTok>')
  }

  try {
    await m.react('⏳')

    const url = args[0]
    const api = `https://neji-api.vercel.app/api/downloader/tiktok?url=${encodeURIComponent(url)}`
    const res = await fetch(api)
    const json = await res.json()

    if (!json.status) {
      return m.reply('❌ Error al obtener el video')
    }

    const data = json.result
    const videoUrl = data.cover.play // sin marca de agua
    const title = data.title || 'TikTok Video'
    const author = data.author_info?.nickname || 'Unknown'
    const duration = data.cover.duration
    const music = data.music?.title || 'Original sound'

    await conn.sendMessage(m.chat, {
      image: { url: data.author_info.avatar },
      caption:
`🎵 *TikTok Downloader*

*Autor:* ${author}
*Duración:* ${duration}s
*Música:* ${music}

    }, { quoted: m })

    await conn.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: title,
      contextInfo: {
        externalAdReply: {
          title: 'TikTok Downloader',
          body: 'Descarga sin marca de agua',
          thumbnailUrl: data.author_info.avatar,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i' // 🔔 rcanal
        }
      }
    }, { quoted: m })

    await m.react('✅')

  } catch (e) {
    console.error(e)
    await m.reply('❌ Ocurrió un error al descargar el TikTok')
  }
}

handler.help = ['tiktok <url>']
handler.tags = ['dl']
handler.command = ['tiktok', 'tt', 'ttdl']

export default handler
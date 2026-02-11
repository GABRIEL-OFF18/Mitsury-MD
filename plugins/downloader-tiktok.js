import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (m.key.fromMe) return

  try {
    let url = text

    // 📌 SI NO HAY TEXTO, BUSCAR LINK EN LA VISTA PREVIA
    if (!url) {
      const ctx =
        m.message?.extendedTextMessage?.contextInfo ||
        m.message?.imageMessage?.contextInfo ||
        m.message?.videoMessage?.contextInfo

      url = ctx?.canonicalUrl || ctx?.text || ''
    }

    if (!url || !url.includes('tiktok.com')) {
      return conn.reply(
        m.chat,
        `*☘️ Envíe un enlace de TikTok*\n\nEjemplo:\n${usedPrefix + command} https://vt.tiktok.com/xxxx`,
        m,
        rcanal
      )
    }

    await conn.reply(
      m.chat,
      '*⏳ Preparando tu descarga...*',
      m,
      rcanal
    )

    const api = `https://neji-api.vercel.app/api/downloader/tiktok?url=${encodeURIComponent(url)}`
    const { data } = await axios.get(api)

    if (!data.status) throw 'No se pudo descargar'

    const video = data.result.cover.play
    const title = data.result.title || 'TikTok'

    await conn.sendMessage(
      m.chat,
      {
        video: { url: video },
        caption: `🎵 *TikTok Downloader*\n\n📌 ${title}`
      },
      { quoted: m }
    )

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, '*❌ Error al descargar el video*', m, rcanal)
  }
}

handler.command = ['tt', 'tiktok']
export default handler
export async function before(m, { conn }) {
  if (!m.isGroup) return
  if (!m.messageStubType) return

  const who = m.messageStubParameters?.[0]
  if (!who) return

  const taguser = `@${who.split('@')[0]}`
  const botname = 'Nagi Bot'

  // 📸 Foto real del usuario
  let profile
  try {
    profile = await conn.profilePictureUrl(who, 'image')
  } catch {
    profile = 'https://i.imgur.com/JP52fdP.png'
  }

  // ===== WELCOME =====
  if (m.messageStubType === 27) {
    const welcomeImg =
      'https://api.ryuu-dev.offc.my.id/tools/WelcomeLeave?' +
      'title=Bienvenido+al+grupo' +
      '&desc=Evita+hacer+spam' +
      `&profile=${encodeURIComponent(profile)}` +
      '&background=https%3A%2F%2Fraw.githubusercontent.com%2FEl-brayan502%2Fimg%2Fupload%2Fuploads%2F837853-1770608354526.jpg'

    await conn.sendMessage(m.chat, {
      product: {
        productImage: { url: welcomeImg },
        productId: 'welcome-001',
        title: `👋 Bienvenido a ${botname}`,
        currencyCode: 'USD',
        priceAmount1000: '0',
        retailerId: 1677,
        productImageCount: 1
      },

      businessOwnerJid: '0@s.whatsapp.net',

      caption: `
✨ *Bienvenido/a al grupo* ✨

👤 Usuario: ${taguser}

📌 Para usar los comandos del bot
regístrate primero.
`.trim(),

      footer: `© ${botname} · Welcome`,

      // 🔘 BOTÓN COMO TU MENÚ
      interactiveButtons: [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify({
            display_text: '📢 Canal WhatsApp',
            url: 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
          })
        }
      ],

      mentions: [who]
    })
  }

  // ===== GOODBYE =====
  if (m.messageStubType === 28 || m.messageStubType === 32) {
    const goodbyeImg =
      'https://api.ryuu-dev.offc.my.id/tools/WelcomeLeave?' +
      'title=Se+fue+del+grupo' +
      '&desc=No+vuelvas' +
      `&profile=${encodeURIComponent(profile)}` +
      '&background=https%3A%2F%2Fraw.githubusercontent.com%2FEl-brayan502%2Fimg%2Fupload%2Fuploads%2Ff1daa4-1770608515673.jpg'

    await conn.sendMessage(m.chat, {
      product: {
        productImage: { url: goodbyeImg },
        productId: 'goodbye-001',
        title: '👋 Hasta luego',
        currencyCode: 'USD',
        priceAmount1000: '0',
        retailerId: 1677,
        productImageCount: 1
      },

      businessOwnerJid: '0@s.whatsapp.net',

      caption: `
👤 Usuario: ${taguser}
salió del grupo.
`.trim(),

      footer: `© ${botname} · Goodbye`,

      // 🔘 BOTÓN TAMBIÉN AQUÍ
      interactiveButtons: [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify({
            display_text: '📢 Canal WhatsApp',
            url: 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
          })
        }
      ],

      mentions: [who]
    })
  }
}
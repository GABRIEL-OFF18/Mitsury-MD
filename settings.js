import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

global.botNumber = '' 
global.owner = [
  ['573244278232', 'Neji ssj', true],
  ['50231458537', 'BrayanX330', true],
  ['573229506110','DuarteXV',true]
  ['51941658192','Perro',true]
]
global.mods = []
global.prems = []
global.suittag = ['50231458537']

// Información del bot 
global.libreria = 'Baileys'
global.baileys = 'V 6.7.9'
global.languaje = 'Español'
global.vs = '7.5.2'
global.vsJB = '5.0'
global.nameqr = 'Itsukiqr'
global.namebot = 'Itsuki-IA'
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.ItsukiJadibts = true
global.Choso = true
global.prefix = ['.', '!', '/' , '#', '%']
global.apikey = 'ItsukiNakanoIA'
global.botNumber = '18482389332'
// Números y settings globales para varios códigos
global.packname = 'el 𝗠𝗲𝗷𝗼𝗿 𝗕𝗼𝘁 𝗗𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 🫰🏻🤖'
global.botname = '🧋 N A G I - 𝐍 𝐄 𝐖 ❄️'
global.wm = '© 𝐋𝐞𝐨'
global.wm3 = '⫹⫺ 𝙈𝙪𝙡𝙩𝙞-𝘿𝙚𝙫𝙞𝙘𝙚 💻'
global.author = '👑 ᗰᗩᗪᗴ ᗷY ᒪᗴO 🧃'
global.dev = '© 𝙾𝚆𝙽𝙴𝚁-𝙻𝙴𝙾 𝙳𝙴𝚅 👑'
global.textbot = 'Itsuki-Nakano|IAV3 Leo'
global.etiqueta = '@Leo Xzsy'
global.gt = '© 𝐂𝐫𝐞𝐚𝐝𝐨 𝐏𝐨𝐫 𝐋𝐞𝐨𝐃𝐞𝐯 𝐈𝐭𝐬𝐮𝐤𝐢-𝐂𝐡𝐚𝐧 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐁𝐨𝐭𝐬 𝐎𝐟 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🤖👑'
global.me = '🌨️ 𝙸𝚃𝚂𝚄𝙺𝙸 𝙽𝙰𝙺𝙰𝙽𝙾 𝙼𝙴𝚆 𝚄𝙿𝙳𝙰𝚃𝙴 ☃️'
global.listo = '*Aqui tiene*'
global.moneda = 'Yenes'
global.multiplier = 69
global.maxwarn = 3
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment


global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.md = 'https://github.com/El-brayan502/megumi-fushiguro-bot'
global.ch = { id: '120363417186717632@newsletter' }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright(`✨ [CONFIG] Se han actualizado los ajustes del bot`))
  import(`${file}?update=${Date.now()}`)
})
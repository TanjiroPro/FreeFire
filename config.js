import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 525218138672

//*──ׄ✞ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.owner = [
  ['51936994155', '🜲 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 👻', true],
  ['51977856263']
];

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['51936994155'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0'
global.languaje = 'Español'
global.nameqr = 'Mafia'
global.sessions = 'mafiaSession'
global.jadi = 'mafiaJadiBot'
global.mafiaJadibts = true

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.packsticker = `♾ ━━━━━━━━\n├ ɓσƭ:\n├ ρяοριєταяιο:\n├ ƒєϲнα ∂є ϲяєαϲιόи:\n├ нοяα:\n♾━━━━━━━━`
global.packname = `𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪`
global.author = `♾━━━━━━━━\n⇝͟͞𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪͟ ⋆\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\nѕτιϲκєя ϐγ: ৎ𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪͟ `;
global.wm = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪';
global.titulowm = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪';
global.igfg = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪'
global.botname = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪'
global.dev = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪'
global.textbot = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪'
global.gt = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🇵🇪';
global.namechannel = '𝕸𝖆𝖋𝖎𝖆 𝕮𝖍𝖆𝖓𝖓𝖊𝖑 𝕭𝖔𝖙𝖘 🇵🇪'

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.moneda = 'monedas'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝐓𝐇𝐄 𝐋𝐄𝐆𝐄𝐍𝐃𝐒 ™◞ • 🌿
global.gp4 = 'https://chat.whatsapp.com/JUraAM0lZyB89FXbsywP9m' //Grupo Oficial De mafia clover 
global.gp1 = 'https://chat.whatsapp.com/JUraAM0lZyB89FXbsywP9m' //Grupo 2
global.gp2 = 'https://chat.whatsapp.com/JUraAM0lZyB89FXbsywP9m'//
global.channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' //Canal test 
global.yt = 'https://www.youtube.com' //Canal De Youtube
global.md = 'https://github.com' //Github Oficial
global.correo = ''
global.cn ='https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363419947391620@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

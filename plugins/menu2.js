const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const fs = require('fs')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "menu2",
    desc: 'get bot menu',
    use: '.play Title',
    react: "📃",
    category: 'main',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
 
    try {
        let desc = `
        👋🏻 dear, 💜 *${pushname}*


*╭╼╾⦂╼⦁╾⦂◦⦁⦂⦁╼╾⦁╼╾⦁⦂⦁╼●◯*
╏◍  *💡 1 - AI*
╏◍  *💡 2 - BOT*
╏◍  *💡 3 - LOGO*
*╰╼╾⦂╼⦁╾⦂◦⦁⦂⦁╼╾⦁╼╾⦁⦂⦁╼●◯*
> al and design try now
*╭╼╾⦂╼⦁╾⦂◦⦁⦂⦁╼╾⦁╼╾⦁⦂⦁╼●◯*
╏◍  *🏮 4 - NSFW*
╏◍  *🏮 5 - OTHER* 
╏◍  *🏮 6 - OWNER*  
╏◍  *🏮 7 - GROUP* 
╏◍  *🏮 8 - SEARCH* 
╏◍  *🏮 9 - RANDOM*
╏◍  *🏮 10 - CONVERTER*
╏◍  *🏮 11 - WALLPAPER*
*╰╼╾⦂╼⦁╾⦂◦⦁⦂⦁╼╾⦁╼╾⦁⦂⦁╼●◯*
> all searching active
*╭╼╾⦂╼⦁╾⦂◦⦁⦂⦁╼╾⦁╼╾⦁⦂⦁╼●◯*
╏◍  *🔮 12 - DOWNLOAD*
╏◍  *🔮 13 - MOVIE*
╏◍  *🔮 14 - REACTION*
*╰╼╾⦂╼⦁╾⦂◦⦁⦂⦁╼╾⦁╼╾⦁⦂⦁╼●*◌
> all download active

┌───────────────────────
├ 🧬 *Uptime:-*  ${runtime(process.uptime())}
├ 🎲 *Ram usage:-*  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└───────────────────────

 ~☑️ CREDIT~
> Pansilu Nethmina 🩵
…………………………………………………………
 *✅ Thank you for using VORTEX MD WhatsApp bot !*`;

        // Removed the voice menu file usage here
    //    await conn.sendMessage(from, { text: desc }, { quoted: mek });

        const vv = await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024,
            caption: desc,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'ＮＩＹＯＸ ＭＤ 🐣',
                    newsletterJid: "120363185591898334@newsletter",
                },
                externalAdReply: {
                    title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`,
                    body: '',
                    thumbnailUrl: 'https://i.ibb.co/tqgkRKQ/Manul-Ofc-X.jpg',
                    sourceUrl: "https://github.com/Danupa0",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let ai = `

🧠 𝐀𝐈 𝐌𝐄𝐍𝐔 ✔️

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯* 
╏◍ *.ᴀɪ* 
╏◍ *.ɢᴘᴛ* 
╏◍ *.ʟᴀᴍᴅᴀ* 
╏◍ *.ʀᴇᴍɪɴɪ* 
╏◍ *.ʟᴀʟᴀʟᴀɴᴅ* 
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: ai,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://pomf2.lain.la/f/y8w4fpdv.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        break;
                    case '2':               
                        // Send Document File
                        let info = `
📃 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 ✔️

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯* 
╏◍ *.ᴍᴇɴᴜ*
╏◍ *.ʙᴏᴛᴀʟʟᴍᴇɴᴜ* 
╏◍ *.ꜱᴄʀɪᴘᴛ*
╏◍ *.ᴘɪɴɢ*
╏◍ *.ꜱʏꜱᴛᴇᴍ*
╏◍ *.ʀᴜɴᴛɪᴍᴇ*
╏◍ *.ᴀʟɪᴠᴇ* *╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: info,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/X73S33T/Manul-Ofc-X.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '3':               
                        // Send Document File
                        let logo = `
💜 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔 ✔️

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
*╏◍  .1971 <ᴛᴇxᴛ>*
*╏◍  .ꜰʟᴀɢ <ᴛᴇxᴛ>*
*╏◍  .ᴡʀɪᴛᴇ <ᴛᴇxᴛ>*
*╏◍  .ꜰʟᴀɢ3 <ᴛᴇxᴛ>*
*╏◍  .ʀᴏʏᴀʟ <ᴛᴇxᴛ>*
*╏◍  .ɢʟɪᴛᴄʜ <ᴛᴇxᴛ>*
*╏◍  .ɢʀᴀᴅɪᴇɴ <ᴛᴇxᴛ>*
*╏◍  .ᴄᴀʀᴛᴏᴏɴ <ᴛᴇxᴛ>*
*╏◍  .ɢʟᴏᴡɪɴɢ <ᴛᴇxᴛ>*
*╏◍  .ᴅᴇʟᴇᴛɪɴɢ <ᴛᴇxᴛ>*
*╏◍  .ᴘᴀᴘᴇʀᴄᴜᴛ <ᴛᴇxᴛ>*
*╏◍  .ʙʟᴀᴄᴋᴘɪɴᴋ <ᴛᴇxᴛ>*
*╏◍  .ʟᴏɢᴏᴍᴀᴋᴇʀ <ᴛᴇxᴛ>*
*╏◍  .ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ <ᴛᴇxᴛ>*
*╏◍  .ɴᴇᴏɴɢʟɪᴛᴄʜ <ᴛᴇxᴛ>*
*╏◍  .ʟᴜxᴜʀʏɢᴏʟᴅ <ᴛᴇxᴛ>*
*╏◍  .ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛ <ᴛᴇxᴛ>*
*╏◍  .ᴘɪxᴇʟɢʟɪᴛᴄʜ <ᴛᴇxᴛ>*
*╏◍  .ɢᴀʟᴀxʏꜱᴛʏʟᴇ <ᴛᴇxᴛ>*
*╏◍  .ᴛʏᴘᴏɢʀᴀᴘʜʏ <ᴛᴇxᴛ>*
*╏◍  .ᴍᴀᴋɪɴɢɴᴇᴏɴ <ᴛᴇxᴛ>*
*╏◍  .ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅ <ᴛᴇxᴛ>*
*╏◍  .ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ <ᴛᴇxᴛ>*
*╏◍  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀ <ᴛᴇxᴛ>*
*╏◍  .ᴡᴀᴛᴇʀᴄᴏʟᴏᴜʀ <ᴛᴇxᴛ>*
*╏◍  .ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ <ᴛᴇxᴛ>*
*╏◍  .ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ <ᴛᴇxᴛ>*
*╏◍  .ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇxᴛ>*
*╏◍  .ᴍᴜʟᴛɪᴄᴏʟᴏᴜʀɴᴇᴏɴ <ᴛᴇxᴛ>*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: logo,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://pomf2.lain.la/f/i1qnngu.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '4':               
                        // Send Document File
                        let nsfw = `
🩵 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 🌸  
                      
*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯* 
*╏◍  .ᴛʀᴀᴘ*
*╏◍  .ɴꜱꜰᴡ1*
*╏◍  .ɴꜱꜰᴡ2*
*╏◍  .ɴꜱꜰᴡ3*
*╏◍  .ɴꜱꜰᴡ4*
*╏◍  .ɴꜱꜰᴡ5*
*╏◍  .xɴxxꜱ*
*╏◍  .xɴxxᴅʟ*
*╏◍  .ʙʟᴏᴡᴊᴏʙ*
*╏◍  .ꜱɪʜɪɴᴏʙᴜ*
*╏◍ .ʜᴇɴᴛᴀɪᴠɪᴅ*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: nsfw,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/X73S33T/Manul-Ofc-X.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '5':               
                        // Send Document File
                        let other = `
🐉 𝐎𝐓𝐇𝐄𝐑𝐒 𝐌𝐄𝐍𝐔 🍭

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ᴠᴠ*
╏◍ *.ꜱᴜᴘᴘᴏʀᴛ*
╏◍ *.ʜᴀᴄᴋ*
╏◍ *.ᴅᴇꜰɪɴᴇ*
╏◍ *.ᴀʙᴏᴜᴛ*
╏◍ *.ᴏᴡɴᴇʀ*
╏◍ *.ᴡᴇᴀᴛʜᴇʀ <ᴘʟᴀᴄᴇ>*
╏◍ *.ɢᴘᴀꜱꜱ*
╏◍ *.ᴄᴜʀʀᴇɴᴄʏ*
╏◍ *.ᴛʀᴀɴꜱʟᴀᴛᴇ*
╏◍ *.ʀᴇᴠᴇʀꜱᴇ*
╏◍ *.ᴛᴇᴍᴘᴍᴀɪʟ*
╏◍ *.ᴄʜᴇᴄᴋᴍᴀɪʟ*
╏◍ *.ᴅᴇʟᴍᴀɪʟ*
╏◍ *.ᴇɴᴄᴏᴅᴇ*
╏◍ *.ᴅᴇᴄᴏᴅᴇ*
╏◍ *.ɴᴘᴍꜱᴛᴀʟᴋ*
╏◍ *.ɪᴘʟᴏᴏᴋᴜᴘ*
╏◍ *.ɪɴꜱᴛᴀꜱᴛᴀʟᴋ*
╏◍ *.ɢɪᴛʜᴜʙᴜꜱᴇʀ*
╏◍ *.ᴘᴀꜱꜱᴡᴏʀᴅ*
╏◍ *.ʜɪᴊᴀᴄᴛ*
╏◍ *.ɢɪᴛᴄʟᴏɴᴇ <ᴜʀʟ>*
╏◍ *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ <ᴜꜱᴇʀɴᴀᴍᴇ>*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: other,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/HB1jPxC/9f919858f92df2cc.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '6':               
                        // Send Document File
                        let own = `
💛 𝐎𝐖𝐍𝐄𝐑  𝐌𝐄𝐍𝐔 🎯

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ʙʟᴏᴄᴋ*
╏◍ *.ʀᴇꜱᴛᴀʀᴛ*
╏◍ *.ꜰᴏʀᴡᴀʀᴅ*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: own,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://pomf2.lain.la/f/i0j9y9lf.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '7':               
                        // Send Document File
                        let group = `
🔥 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 🌈

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ᴋɪᴄᴋ*
╏◍ *.ᴍᴜᴛᴇ*
╏◍ *.ʟᴇᴀᴠᴇ*
╏◍ *.ᴛᴀɢᴀʟʟ*
╏◍ *.ᴋɪᴄᴋᴀʟʟ*
╏◍ *.ᴅᴇᴍᴏᴛᴇ*
╏◍ *.ᴜɴᴍᴜᴛᴇ*
╏◍ *.ꜱᴇᴛᴅᴇꜱᴄ*
╏◍ *.ʜɪᴅᴇᴛᴀɢ*
╏◍ *.ᴄʀᴇᴀᴛɢᴄ*
╏◍ *.ꜱᴇᴛɴᴀᴍᴇ*
╏◍ *.ᴘʀᴏᴍᴏᴛᴇ*
╏◍ *.ᴛᴀɢᴀᴅᴍɪɴ*
╏◍ *.ᴏᴘᴇɴᴛɪᴍᴇ*
╏◍ *.ᴄʟᴏꜱᴇᴛɪᴍᴇ*
╏◍ *.ᴇᴘʜᴇᴍᴇʀᴀʟ*
╏◍ *.ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ*
╏◍ *.ᴄᴏɴᴛᴀᴄᴛᴛᴀɢ*
╏◍ *.ᴀᴜᴛᴏʀᴇᴀᴅꜱᴡ*
╏◍ *.ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛ*
╏◍ *.ꜱᴇɴᴅᴄᴏɴᴛᴀᴄᴛ*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: group,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/RQJYpZZ/88e8459bf4ad8332.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '8':               
                        // Send Document File
                        let search = `

🪼 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 🌛

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ʏᴛꜱ  <ᴛᴇxᴛ>*
╏◍ *.ɪᴍɢꜱ  <ᴛᴇxᴛ>*
╏◍ *.ɪᴍɢ2  <ᴛᴇxᴛ>*
╏◍ *.ᴡɪᴋɪ  <ᴛᴇxᴛ>*
╏◍ *.ᴛᴛꜱᴇᴀʀᴄʜ <ᴛᴇxᴛ>*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: search,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://pomf2.lain.la/f/2ljyhyrd.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '9':               
                        // Send Document File
                        let rdm = `
💦 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 🌬️

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ᴅᴏɢ*
╏◍ *.ʟᴏʟɪ*
╏◍ *.ʀᴄᴀᴛ*
╏◍ *.ɴᴇᴋᴏ*
╏◍ *.ᴍᴀɪᴅ*
╏◍ *.ᴀᴡᴏᴏ*
╏◍ *.ʀɪᴍɢꜱ*
╏◍ *.ᴡᴀɪꜰᴜ*
╏◍ *.ʀɪᴍɢꜱ*
╏◍ *.ʀʜᴜꜱʙᴜ*
╏◍ *.ʀᴀɴɪᴍᴇ*
╏◍ *.ʀᴡᴀɪꜰᴜ*
╏◍ *.ʀᴄᴏꜰꜰᴇᴇ*
╏◍ *.ᴍᴇɢᴜᴍɪɴ*
╏◍ *.ʀᴄᴏꜱᴘʟᴀʏ*
╏◍ *.ᴀɴɪᴍᴇɢɪʀʟ*
╏◍ *.ᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇxᴛ>*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: rdm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/WnK1LXR/5671bb4476b54593.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '10':               
                        // Send Document File
                        let conv = `
🎡 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐎𝐑 𝐌𝐄𝐍𝐔 ⛓‍💥

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ᴛᴛꜱ*
╏◍ *.ᴀᴛᴛᴘ*
╏◍ *.ᴛᴏᴜʀʟ*
╏◍ *.ᴛᴏᴍᴘ3*
╏◍ *.ᴄᴏɴᴠᴇʀᴛ*
╏◍ *.sᴛɪᴄᴋᴇʀ*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: conv,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/HB1jPxC/9f919858f92df2cc.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '11':               
                        // Send Document File
                        let wall = `
🪩 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐄𝐍𝐔 🖤

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ᴀɴɪᴍᴇ1*
╏◍ *.ᴀɴɪᴍᴇ2*
╏◍ *.ᴀɴɪᴍᴇ3*
╏◍ *.ᴀɴɪᴍᴇ4*
╏◍ *.ᴀɴɪᴍᴇ5*
╏◍ *.ᴡᴀʟʟᴘᴀᴘᴇʀ*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz
> KalumXz
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: wall,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/VmWP6Nq/cc20c37ec078fccd.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '12':               
                        // Send Document File
                        let down = `
🛟 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 💭

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ғʙ <ᴜʀʟ>*
╏◍ *.ᴛᴛ <ᴜʀʟ>* 
╏◍ *.ɪɢ <ᴜʀʟ>*
╏◍ *.ғʙ1 <ᴜʀʟ>*
╏◍ *.ᴀᴘᴋ <ϙᴜᴇʀʏ>*
╏◍ *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
╏◍ *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
╏◍ *.ꜱᴏɴɢ2 <ϙᴜᴇʀʏ>*
╏◍ *.ᴛᴛꜱᴇᴀʀᴄʜ <ϙᴜᴇʀʏ>*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: down,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://pomf2.lain.la/f/vf4i9v22.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})
                        
                        break;
                        case '13':               
                        // Send Document File
                        let mv = `
🎬 𝐌𝐎𝐕𝐈𝐄 𝐌𝐄𝐍𝐔 ☕

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ꜱɪɴʜᴀʟᴀꜱᴜʙ <Qᴜᴇʀʏ>*
╏◍ *.ʙᴀɪꜱᴄᴏᴘᴇ <Qᴜᴇʀʏ>* 
╏◍ *.ɢɪɴɪꜱɪꜱɪʟᴀ <Qᴜᴇʀʏ>*
╏◍ *.ᴄɪɴᴇᴄᴜʙᴢ <Qᴜᴇʀʏ>*
╏◍ *.ᴢᴏᴏᴍ <ϙᴜᴇʀʏ>*
╏◍ *.ᴍᴏᴠɪᴇ <ϙᴜᴇʀʏ>*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: mv,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/xCSknjm/ac26b5be9f2152b0.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})

                    break;
                    case '14':               
                        // Send Document File
                        let react = `
😶 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍 𝐌𝐄𝐍𝐔 ☁

*╭◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
╏◍ *.ʙᴜʟʟʏ*
╏◍ *.ᴄᴜᴅᴅʟᴇ*
╏◍ *.ᴄʀʏ*
╏◍ *.ʜᴜɢ*
╏◍ *.ᴀᴡᴏᴏ*
╏◍ *.ᴋɪꜱꜱ*
╏◍ *.ʟɪᴄᴋ*
╏◍ *.ᴘᴀᴛ*
╏◍ *.ꜱᴍᴜɢ*
╏◍ *.ʙᴏɴᴋ*
╏◍ *.ʏᴇᴇᴛ*
╏◍ *.ʙʟᴜꜱʜ*
╏◍ *.ꜱᴍɪʟᴇ*
╏◍ *.ᴡᴀᴠᴇ*
╏◍ *.ʜɪɢʜꜰɪᴠᴇ*
╏◍ *.ʜᴀɴᴅʜᴏʟᴅ*
╏◍ *.ɴᴏᴍ*
╏◍ *.ʙɪᴛᴇ*
╏◍ *.ɢʟᴏᴍᴘ*
╏◍ *.ꜱʟᴀᴘ*
╏◍ *.ᴋɪʟʟ*
╏◍ *.ᴋɪᴄᴋ*
╏◍ *.ʜᴀᴘᴘʏ*
╏◍ *.ᴡɪɴᴋ*
╏◍ *.ᴘᴏᴋᴇ*
╏◍ *.ᴅᴀɴᴄᴇ*
╏◍ *.ᴄʀɪɴɢᴇ*
*╰◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◯*
 ~☑️ CREDIT~
> DanuXz 
> KalumXz 
…………………………………………………………
 *✅ Thank you for using NiyoXMd WhatsApp bot !*
`
 
return await conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `® 𝐍𝐈𝐘𝐎𝐗 𝐌𝐃 💀`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: react,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName:  'ＮＩＹＯＸ ＭＤ 🐣' ,
		newsletterJid: "120363185591898334@newsletter",
		},
		externalAdReply: {  
title: `ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ®`, 
body: '',
thumbnailUrl:  'https://i.ibb.co/X73S33T/Manul-Ofc-X.jpg'  ,
sourceUrl: "https://github.com/Danupa0" , 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:mek})

                    break;
                    default:
                        reply("Invalid option. Please select a valid option 💗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

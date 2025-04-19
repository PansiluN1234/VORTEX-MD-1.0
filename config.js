const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7eQg0DSL#M2-upRjT6euTe_OYu3kr8FQHf9GSTjmJBKW4R92I3RY",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "💖",
// set the auto reply massage on status reply  
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94763513529",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Pansilu Nethmina",
// add bot owner name   
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/NethminaPansil/Whtsapp-bot/refs/heads/main/images%20(11).jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "Hello , I am alive now!!\n\n Join my Support group using this Link 📥 \n\n https://chat.whatsapp.com/EXPFUXpHxFR5ur03emaNx0 \n\n 💝 𝐌𝐚𝐝𝐞 𝐛𝐲 PANSILU 💝 \n\n 🔒 ᐯㄖ尺ㄒ乇乂 爪ᗪ ㄒ乇卂爪 🔒",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94763513529",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

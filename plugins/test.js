const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');
const domain = `https://manul-ofc-movie-api-site-48fb0de548fc.herokuapp.com`;
const api_key = `free`;

cmd({
    pattern: "cinesubz",
    alias: ["cine", "cinesub"],
    react: '🎬',
    category: "download",
    desc: "Download Sinhala Sub Movies from Cinesubz",
    filename: __filename
}, async (conn, m, mek, { from, isOwner, isMe, q, reply }) => {
    if (!q) return await reply("🍿 *කරුණාකර චිත්‍රපට නමක් ලබා දෙන්න!* (උදා: Captain America)");

    if (!isMe && !isOwner) return await reply("⛔️ *Movie download සඳහා ඇප් අයිතිකරුට පමණක් අවසර ඇත!*");

    try {
        const search = await fetchJson(`${domain}/cines?query=${q}&apikey=${api_key}`);
        const results = search.data;

        if (!results || results.length === 0) return await reply("😔 කිසිවක් සොයාගන්නට නොහැකි විය.");

        const topResults = results.slice(0, 10);
        let text = `🎥 *Search Results for* "${q}"\n\n`;

        topResults.forEach((movie, i) => {
            text += `*${i + 1}.* ${movie.title}\n🔗 ${movie.link}\n\n`;
        });

        const sentMsg = await conn.sendMessage(from, {
            image: { url: topResults[0].thumbnail },
            caption: text
        }, { quoted: mek });

        const messageID = sentMsg.key.id;

        conn.ev.on('messages.upsert', async (msg) => {
            const userMsg = msg.messages[0];
            if (!userMsg.message) return;

            const body = userMsg.message.conversation || userMsg.message.extendedTextMessage?.text || '';
            const replyTo = userMsg.message.extendedTextMessage?.contextInfo?.stanzaId;
            if (replyTo !== messageID) return;

            const number = parseInt(body.trim());
            if (isNaN(number) || number < 1 || number > topResults.length) {
                return await reply("❌ *කරුණාකර වලංගු අංකයක් යවන්න.*");
            }

            const movie = topResults[number - 1];
            const info = await fetchJson(`${domain}/cine-info?url=${encodeURIComponent(movie.link)}&apikey=${api_key}`);
            const downloads = info.data.downloadLinks;

            if (!downloads || downloads.length === 0) return await reply("⚠️ Download links ලබාගත නොහැක.");

            let dlText = `🎬 *${info.data.title}*\n\n📥 *Download Links:*\n`;
            downloads.forEach((dl, i) => {
                dlText += `*${i + 1}.* ${dl.quality} - ${dl.size}\n🔗 ${dl.link}\n\n`;
            });

            const dlMsg = await conn.sendMessage(from, {
                image: { url: movie.thumbnail },
                caption: dlText
            }, { quoted: userMsg });

            const dlMsgID = dlMsg.key.id;

            conn.ev.on('messages.upsert', async (dlResp) => {
                const pick = dlResp.messages[0];
                if (!pick.message) return;

                const body2 = pick.message.conversation || pick.message.extendedTextMessage?.text || '';
                const replyTo2 = pick.message.extendedTextMessage?.contextInfo?.stanzaId;
                if (replyTo2 !== dlMsgID) return;

                const choice = parseInt(body2.trim());
                if (isNaN(choice) || choice < 1 || choice > downloads.length) {
                    return await reply("❌ *වලංගු අංකයක් යවන්න.*");
                }

                const fileLink = downloads[choice - 1].link;
                const getDL = await fetchJson(`${domain}/cinesubz-direct?url=${encodeURIComponent(fileLink)}&apikey=${api_key}`);
                const direct = getDL.data.downloadLink;

                await conn.sendMessage(from, {
                    document: { url: direct },
                    mimetype: 'video/mp4',
                    fileName: `${info.data.title} - ${downloads[choice - 1].quality}.mp4`,
                    caption: `✅ *Downloaded from Cinesubz*\n🎞️ ${info.data.title}\n📥 Quality: ${downloads[choice - 1].quality}\n\n⚖️ Powered by VORTEX MD | Pansilu Nethmina 💚`
                }, { quoted: pick });
            });
        });

    } catch (e) {
        console.error(e);
        await reply("❌ *දෝෂයක් ඇතිවිය. පසුව නැවත උත්සහා කරන්න.*");
    }
});

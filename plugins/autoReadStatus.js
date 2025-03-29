const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");
const domain = `https://api-dark-shan-yt.koyeb.app`;

//=============================================
cmd(
  {
    pattern: "pornhub",
    alias: ["phvideo", "phdl"],
    desc: "Download a Pornhub video",
    use: ".pornhub <url>",
    react: "🎬",
    category: "download",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!q) return reply("Please provide a valid Pornhub video URL.");

      // URL encode the Pornhub video URL to ensure it's correctly passed in the API request
      const encodedUrl = encodeURIComponent(q);
      const apiUrl = `${domain}/download/pornhub?url=${encodedUrl}&apikey=a374862d823e5da3`;

      const response = await fetchJson(apiUrl);

      console.log("Full API Response:", JSON.stringify(response, null, 2)); // Log the entire response for debugging

      // Check if the response status is true and contains data
      if (response.status !== true || !response.data) {
        return reply(
          "Sorry, there was an issue fetching the video. Please try again later."
        );
      }

      const videoData = response.data;

      // Check if necessary data exists
      const videoTitle = videoData.title || "No title available";
      const videoDescription =
        videoData.description || "No description available";
      const videoThumbnail = videoData.video_cover || "No thumbnail available";
      const videoFormats = videoData.formats || [];

      // If no video formats are available, notify the user
      if (videoFormats.length === 0) {
        return reply(
          "Sorry, no video formats were found. Please try again later."
        );
      }

      let optionsText = `*🎬 𝗣𝗢𝗥𝗡𝗛𝗨𝗕 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🎬*\n\n`;
      optionsText += `*Title:* _~${videoTitle}~_\n`;
      optionsText += `*Description:* _~${videoDescription}~_\n\n`;
      optionsText += "Please select a video quality:\n";

      let options = "";
      videoFormats.forEach((format, index) => {
        options += `${index + 1}) ${format.resolution} - ${format.type} (${
          format.resolution
        }p)\n`;
      });

      const videoOptionsMessage = await conn.sendMessage(
        from,
        {
          image: { url: videoThumbnail },
          caption: optionsText + options,
        },
        { quoted: mek }
      );

      // Listen for user selection
      conn.ev.on("messages.upsert", async (msgUpdate) => {
        const msg = msgUpdate.messages[0];
        if (!msg.message || !msg.message.extendedTextMessage) return;

        const selectedOption = msg.message.extendedTextMessage.text.trim();

        if (
          msg.message.extendedTextMessage.contextInfo &&
          msg.message.extendedTextMessage.contextInfo.stanzaId ===
            videoOptionsMessage.key.id
        ) {
          const selectedIndex = parseInt(selectedOption) - 1;

          // Ensure the selected index is valid
          if (selectedIndex >= 0 && selectedIndex < videoFormats.length) {
            const selectedFormat = videoFormats[selectedIndex];
            const downloadUrl = selectedFormat.download;

            // Log the download URL for debugging
            console.log("Download URL:", downloadUrl);

            // Ensure the URL is valid before sending
            if (!downloadUrl) {
              return reply(
                "There was an error with the download URL. Please try again."
              );
            }

            // Send the video to the user
            await conn.sendMessage(
              from,
              {
                video: { url: downloadUrl },
                mimetype: `video/${selectedFormat.type}`,
                caption: `> *Powered By - : ©𝗩𝗢𝗥𝗧𝗘𝗫 𝗠𝗗*`,
              },
              { quoted: mek }
            );
          } else {
            reply("Invalid option. Please select a valid option.");
          }
        }
      });
    } catch (e) {
      console.error("Error details:", e);
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
      reply("An error occurred while processing your request.");
    }
  }
);

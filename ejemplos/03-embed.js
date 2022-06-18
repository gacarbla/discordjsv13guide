const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "DIRECT_MESSAGES",
        "GUILD_MEMBERS",
        "DIRECT_MESSAGE_REACTIONS",
        "GUILD_BANS",
        "DIRECT_MESSAGE_TYPING",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
    ]
});

client.on('ready', () => {
    console.log(`Estoy listo!`);
});

client.on('message', (message) => {
    const prefix = "!"
    if (message.author.bot) return
    if (message.content.startsWith(prefix + 'ping')) {
        var embed = new Discord.MessageEmbed()
            .setDescription("Pong 🏓")
            .setColor(0x5865f2)
        message.channel.send({ embeds: [embed] });
    }

});

client.login('TokenSecreto');
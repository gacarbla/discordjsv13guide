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
        message.channel.send({ content: `Pong 🏓` });
    }

});

client.login('TokenSecreto');
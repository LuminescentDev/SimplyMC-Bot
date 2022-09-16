const Discord = require("discord.js")
module.exports = {
    name: "closeTicket",
    ephemeral: true,
    async execute(client, interaction) {
        interaction.channel.delete();
    }
}
const Discord = require("discord.js")
module.exports = {
    name: "acceptRules",
    ephemeral: true,
    async execute(client, interaction) {
        const role = interaction.guild.roles.cache.find(role => role.name === "Member");
        interaction.member.roles.add(role);
        interaction.reply({ content: "You have accepted the rules!", ephemeral: true });
    }
}
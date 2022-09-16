const Discord = require("discord.js");
module.exports = {
	name: "sendrulesmessage",
	category: "test",
	description: "uwu!",
	ephemeral: false,
	async execute(client, interaction, args) {
        const embed = new Discord.EmbedBuilder()
        .setColor(0x3498DB)
        .addFields(
                { name: '1.)', value: 'Just follow discord Tos' },
                { name: '2.)', value: 'Use common sense' },
                { name: '3.)', value: 'Dont be an idiot please' },
        )
        const acceptRulesButton = new Discord.ButtonBuilder()
        .setCustomId("acceptRules")
        .setLabel("Accept Rules")
        .setStyle("Success")
        const row = new Discord.ActionRowBuilder()
        .addComponents([acceptRulesButton])
        await interaction.channel.send({ content: "", embeds: [embed], components: [row] });
	},
}; 
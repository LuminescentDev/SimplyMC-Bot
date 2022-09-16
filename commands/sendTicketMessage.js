const Discord = require("discord.js");
module.exports = {
	name: "sendticketmessage",
	category: "test",
	description: "uwu!",
	ephemeral: false,
	async execute(client, interaction, args) {
        const embed = new Discord.EmbedBuilder()
        .setColor(0x3498DB)
        .addFields([
            { 
                name: "Create a Ticket", 
                value: "Create a private ticket thread to get help with a specific issue", 
                inline: false 
            }, 
            { 
                name: "Asking Questions", 
                value: "Please direct your questions to the proper channels!" +
                "Use <#1017964006054576168> or click Ask a question to open a public thread", 
                inline: false 
            }, 
        ])
        const askQuestionButton = new Discord.ButtonBuilder()
        .setCustomId("askQuestion")
        .setLabel("Ask a question")
        .setStyle("Primary")
        const createTicketButton = new Discord.ButtonBuilder()
        .setCustomId("createTicket")
        .setLabel("Create a ticket")
        .setStyle("Primary")
        const row = new Discord.ActionRowBuilder()
        .addComponents([askQuestionButton, createTicketButton])
        await interaction.channel.send({ content: "", embeds: [embed], components: [row] });
	},
}; 
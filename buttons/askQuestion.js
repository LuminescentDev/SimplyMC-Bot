const Discord = require("discord.js")
module.exports = {
    name: "askQuestion",
    ephemeral: true,
    async execute(client, interaction) {
    
        const modal = new Discord.ModalBuilder()
            .setCustomId("askQuestion")
            .setTitle("Ask a question")
        const row = new Discord.ActionRowBuilder()
            .addComponents( 
                new Discord.TextInputBuilder()
                .setCustomId('question')
                .setLabel('What is your question')
                .setPlaceholder('No reason given. (Example: How do I use the website?)')
                .setStyle(Discord.TextInputStyle.Paragraph)
                .setRequired(true)
            );
        modal.addComponents(row)
        interaction.showModal(modal);
    }
}
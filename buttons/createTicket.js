const Discord = require("discord.js")
module.exports = {
    name: "createTicket",
    ephemeral: true,
    async execute(client, interaction) {
    
        const modal = new Discord.ModalBuilder()
            .setCustomId("createTicket")
            .setTitle("Create a ticket")

        // const row = new Discord.ActionRowBuilder()
        // .addComponents(
        //     new Discord.SelectMenuBuilder()
        //         .setCustomId('select')
        //         .setPlaceholder('Nothing selected')
        //         .addOptions(
        //             {
        //                 label: 'Website',
        //                 description: 'Website related issues',
        //                 value: 'website',
        //             },
        //             {
        //                 label: 'Bot',
        //                 description: 'Bot related issues',
        //                 value: 'bot',
        //             },
        //             {
        //                 label: 'Desktop App',
        //                 description: 'Desktop app related issues',
        //                 value: 'desktop',
        //             },
        //             {
        //                 label: 'Other',
        //                 description: 'Other issues',
        //                 value: 'other',
        //             },
        //         ),
        // );
        const row = new Discord.ActionRowBuilder()
        .addComponents( 
            new Discord.TextInputBuilder()
            .setCustomId('type')
            .setLabel('Type of issue')
            .setPlaceholder('No reason given. (Example: Website, Bot, Desktop App, Other)')
            .setStyle(Discord.TextInputStyle.Short)
            .setRequired(true)
        );
        const row2 = new Discord.ActionRowBuilder()
            .addComponents( 
                new Discord.TextInputBuilder()
                .setCustomId('issue')
                .setLabel('What issue are you having')
                .setPlaceholder('No reason given. (Example: Cannot use certain page)')
                .setStyle(Discord.TextInputStyle.Paragraph)
                .setRequired(true)
            );
        modal.addComponents(row, row2)
        interaction.showModal(modal);
    }
}
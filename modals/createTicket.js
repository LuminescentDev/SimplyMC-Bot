const Discord = require("discord.js");
module.exports = {
    name: "createTicket",
    ephemeral: true,
    async execute(client, interaction) {
        const type = interaction.fields.getTextInputValue('type');
        const issue = interaction.fields.getTextInputValue('issue');
        const embed = new Discord.EmbedBuilder()
        .setTitle("New Ticket")
        .addFields([
            {
                name: "Type",
                value: type,
                inline: true,
            },
            {
                name: "Issue",
                value: issue,
                inline: true,
            },
        ])
        .setTimestamp();
        const closeTicketButton = new Discord.ButtonBuilder()
        .setCustomId("closeTicket")
        .setLabel("Close Ticket")
        .setStyle("Danger")
        const row = new Discord.ActionRowBuilder()
        .addComponents([closeTicketButton])
        const channel = await interaction.guild.channels.create({
            name: "ticket-" + interaction.user.username, 
            type: Discord.ChannelType.GuildText,
            parent: "1018035644288729108",
            topic: `Ticket created by ${interaction.user.tag}`,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [Discord.PermissionsBitField.Flags.ViewChannel],
                },
                {
                id: interaction.member.id,
                allow: [Discord.PermissionsBitField.Flags.ViewChannel]
                },
            ]
        })
        await channel.send({ content: "<@&1017902987500322876>", embeds: [embed], components: [row] });
        interaction.editReply("Ticket Created!");
    }
}
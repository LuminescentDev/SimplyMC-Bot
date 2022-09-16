const Discord = require("discord.js");
module.exports = {
    name: "askQuestion",
    ephemeral: true,
    async execute(client, interaction) {

        const thread = await client.channels.cache.get("1017964006054576168").threads.create({
            name: `${interaction.user.username}${interaction.user.discriminator}`,
            autoArchiveDuration: 60,
            type: Discord.ChannelType.PublicThread,
            reason: `Question by ${interaction.user.tag}`,
        });
        thread.members.add(interaction.user.id)
        const question = interaction.fields.getTextInputValue('question');
        const embed = new Discord.EmbedBuilder()
        .setTitle("Question")
        .setDescription(question)
        thread.send({ content: "", embeds: [embed] });
        interaction.editReply({ content: "Thread Created!", components: [] });
    }
}
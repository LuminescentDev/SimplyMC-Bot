const Discord = require("discord.js");
module.exports = {
	name: "ping",
	category: "test",
	description: "Ping!",
	ephemeral: false,
	async execute(client, interaction, args) {
		await interaction.editReply({ content: "Pinging..." }).then(async () => {
			const ping = Date.now() - interaction.createdAt;
			const api_ping = client.ws.ping;

			const embed = new Discord.EmbedBuilder()
            .setAuthor({name: `Pong`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor(0x3498DB)
            .setFooter({text: `Ping requested by ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })})
            .addFields([{ name: "Bot Ping", value: `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, inline: true }, { name: "API Ping", value: `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, inline: true }])
            .setTimestamp();

			await interaction.editReply({ content: "", embeds: [embed] });
		});
	},
}; 
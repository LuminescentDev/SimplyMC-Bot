const Discord = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({ default: e }) => e(...args));
module.exports = {
	name: "gradient",
	category: "test",
	description: "pp!",
	options: require("../options/gradient.js"),
	ephemeral: false,

    async autoComplete(client, interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = [
            { name: '&#rrggbb', value: '&#$1$2$3$4$5$6$f$c' }
        ];
        const filtered = choices.filter(choice => choice.name.toLowerCase().startsWith(focusedValue.toLowerCase()));
        if (!filtered.length) filtered.push({ name: focusedValue, value: focusedValue });
        interaction.respond(filtered);
    },

	async execute(client, interaction, args) {
		const text = args.getString("text");
		const colors = args.getString("colors").split(",");
		const format = args.getString("format") ? args.getString("format") : "&#$1$2$3$4$5$6$f$c";
		const formatChar = args.getString("formatChar") ? args.getString("formatChar") : "&";
		const bold = args.getBoolean("bold");
		const italic = args.getBoolean("italic");
		const underline = args.getBoolean("underline");
		const strikethrough = args.getBoolean("strikethrough");
		const formatting = compress([bold, italic, underline, strikethrough]);
		const gradient = await fetch(`http://localhost:8081/gradient?text=${encodeURIComponent(text)}&colors=${encodeURIComponent(colors.join(","))}&format=${encodeURIComponent(format)}&formatChar=${encodeURIComponent(formatChar)}&formatting=${formatting}`)
		.then(res => res.json())
		const previewbuffer = Buffer.from(gradient.Preview.split(",")[1], 'base64');
		const preview = new Discord.AttachmentBuilder().setName("preview.png").setFile(previewbuffer);
		interaction.editReply({ content: gradient.Output, files: [preview] });
	},
}; 

// Takes an array of boolean values and turns them into a number
function compress(values) {
	let output = 0;
	for (let i = 0; i < values.length; i++) {
		const value = values[i];
		output |= ~~value << i;
	}
	return output;
  }
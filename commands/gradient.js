const Discord = require("discord.js");
const fetch = (...args) => import("node-fetch").then(({ default: e }) => e(...args));
module.exports = {
  name: "gradient",
  category: "test",
  description: "pp!",
  options: require("../options/gradient.js"),
  ephemeral: false,

  async autoComplete(client, interaction) {
    const focusedValue = interaction.options.getFocused();
    const choices = [
      { name: "&#rrggbb", value: "&#$1$2$3$4$5$6$f$c" },
      { name: "<#rrggbb>", value: "<#$1$2$3$4$5$6>$f$c" },
      { name: "&x&r&r&g&g&b&b", value: "&x&$1&$2&$3&$4&$5&$6$f$c" },
      { name: "§x§r§r§g§g§b§b", value: "§x§$1§$2§$3§$4§$5§$6$f$c" },
    ];
    const filtered = choices.filter((choice) =>
      choice.name.toLowerCase().startsWith(focusedValue.toLowerCase())
    );
    if (!filtered.length)
      filtered.push({ name: focusedValue, value: focusedValue });
    interaction.respond(filtered);
  },

  async execute(client, interaction, args) {
    try {
      const text = args.getString("text");
      const colors = args.getString("colors").split(",");
      const prefix = args.getString("prefix") ? args.getString("prefix") : "";
      const format = args.getString("format")
        ? args.getString("format")
        : "&#$1$2$3$4$5$6$f$c";
      const formatChar = args.getString("formatChar")
        ? args.getString("formatChar")
        : "&";
      const bold = args.getBoolean("bold");
      const italic = args.getBoolean("italic");
      const underline = args.getBoolean("underline");
      const strikethrough = args.getBoolean("strikethrough");

      const gradient = await fetch(
        `https://api.simplymc.art/gradient?text=${encodeURIComponent(
          text
        )}&colors=${encodeURIComponent(
          colors.join(",")
        )}&prefix=${encodeURIComponent(
          prefix + " "
        )}&format=${encodeURIComponent(
          format
        )}&formatchar=${encodeURIComponent(
          formatChar
        )}&bold=${encodeURIComponent(
          bold
        )}&italic=${encodeURIComponent(
          italic
        )}&underline=${encodeURIComponent(
          underline
        )}&strikethrough=${encodeURIComponent(
          strikethrough
        )}`
      ).then((res) => res.json());
    //   const previewbuffer = Buffer.from(
    //     gradient.Preview.split(",")[1],
    //     "base64"
    //   );
    //   const preview = new Discord.AttachmentBuilder()
    //     .setName("preview.png")
    //     .setFile(previewbuffer);
      interaction.editReply({ content: gradient.output });
    } catch (error) {
      interaction.editReply(
        `An error occurred while executing the command: ${error.message}`
      );
    }
  },
};

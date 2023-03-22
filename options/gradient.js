const {
  SlashCommandStringOption,
  SlashCommandBooleanOption,
} = require("discord.js");

module.exports = async function (cmd) {
  cmd
    .addStringOption(
      new SlashCommandStringOption()
        .setName("text")
        .setDescription("The text to use")
        .setRequired(true)
    )
    .addStringOption(
      new SlashCommandStringOption()
        .setName("colors")
        .setDescription("The colors to use")
        .setRequired(true)
    )
    .addStringOption(
        new SlashCommandStringOption()
        .setName("prefix")
        .setDescription("Usually used for commands")
        .setRequired(false)
    )
    .addStringOption(
      new SlashCommandStringOption()
        .setName("format")
        .setDescription("the gradient format")
        .setRequired(false)
        .setAutocomplete(true)
    )
    .addStringOption(
      new SlashCommandStringOption()
        .setName("formatchar")
        .setDescription("the gradient format character")
        .setRequired(false)
    )
    .addBooleanOption(
      new SlashCommandBooleanOption()
        .setName("bold")
        .setDescription("make the text bold")
        .setRequired(false)
    )
    .addBooleanOption(
      new SlashCommandBooleanOption()
        .setName("italic")
        .setDescription("make the text italic")
        .setRequired(false)
    )
    .addBooleanOption(
      new SlashCommandBooleanOption()
        .setName("underline")
        .setDescription("make the text underline")
        .setRequired(false)
    )
    .addBooleanOption(
      new SlashCommandBooleanOption()
        .setName("strikethrough")
        .setDescription("make the text strikethrough")
        .setRequired(false)
    );
};

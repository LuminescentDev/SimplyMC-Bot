const { SlashCommandBuilder } = require('discord.js');
module.exports = async client => {
    let cmds = []
    for (let command of client.commands) {
        command = command[1];
        const cmd = new SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description)
        if(command.options) command.options(cmd);
        cmds.push(cmd.toJSON())
    }
    await client.guilds.cache.get("1017694167155093554")?.commands.set(cmds);

    client.logger.info("Ready")

}
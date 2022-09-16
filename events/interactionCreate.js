const {InteractionType} = require('discord.js');
module.exports = async (client, interaction) => {

    if(interaction.isCommand()){
        const command = client.commands.get(interaction.commandName);
        const args = interaction.options;
        await interaction.deferReply({ephemeral: command.ephemeral})
        try {
            await command.execute(client, interaction, args);
        } catch (error) {
            console.error(error);
            await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }

	//check if interaction is a button press
	if(interaction.isButton() && !interaction.isSelectMenu()){
		//get button code and try to execute it
		const button = client.buttons.get(interaction.customId);
	    try {
		    button.execute(client, interaction);
	    } catch (error) {
		    client.logger.error(error);
            await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
	    }
	}

	if (interaction.type == InteractionType.ModalSubmit){
		//get button code and try to execute it
		const modal = client.modals.get(interaction.customId);
		await interaction.deferReply({ephemeral: modal.ephemeral})
	    try {
		    modal.execute(client, interaction);
	    } catch (error) {
		    client.logger.error(error);
	    }
	}

	// Check if the interaction is autocomplete
	if (interaction.type == InteractionType.ApplicationCommandAutocomplete) {

		// Get the command from the available commands in the bot
		const command = client.commands.get(interaction.commandName);
		if (!command || !command.autoComplete) return;

		// if autocomplete is set then execute it
		command.autoComplete(client, interaction);
	}
}
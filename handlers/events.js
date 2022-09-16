const { readdirSync } = require("fs");

module.exports = client => {

	/**
	 * Client Events
	 */
	readdirSync("./events/").forEach(file => {
		const event = require(`../events/${file}`);
		let eventName = file.split(".")[0];
		client.logger.info(`Loading Event ${eventName}`);
		client.on(eventName, event.bind(null, client));
	});
}; 
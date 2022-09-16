const fs = require("fs");
module.exports = client => {
	function getDirectories() {
		return fs.readdirSync("./modals").filter(function subFolder(file) {
			return fs.statSync("./modals/" + file).isDirectory();
		});
	}
	//Gets all directorys in the command folder
	let commandFiles = fs.readdirSync("./modals").filter(file => file.endsWith(".js"));
	//Gets all files ending in .js in the main commands folder
	for (const folder of getDirectories()) {
		const folderFiles = fs.readdirSync("./modals/" + folder).filter(file => file.endsWith(".js"));
		for (const file of folderFiles) {
			commandFiles.push([folder, file]);
		}
	}
	//Gets all files ending in .js in all the subfolders of the commmands folder
	for (const file of commandFiles) {
		let button;
		button = Array.isArray(file) ? require(`../modals/${file[0]}/${file[1]}`) : require(`../modals/${file}`);
		client.modals.set(button.name, button);
	}
	//Creates the actual commands and saves them to the client for later use
	client.logger.info("Modals Loaded");
}; 
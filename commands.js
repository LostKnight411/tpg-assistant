require('dotenv/config');
const {ContextMenuCommandBuilder, SlashCommandBuilder, ApplicationCommandType, REST, Routes} = require('discord.js');

const commandsData = [
	new ContextMenuCommandBuilder()
		.setName('Add to tracker')
		.setType(ApplicationCommandType.Message),
	
	new SlashCommandBuilder()
		.setName('manualadd')
		.setDescription('Manually add a submission to the tracker')
		.addStringOption(username => 
			username.setName('username')
				.setDescription('Username of the submitter'))
		.addStringOption(coords => 
			coords.setName('coords')
				.setDescription('Coordinates in the format of #,# '))
];

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Refreshing context menu commands');
		
		await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{body: commandsData}
		);
		console.log("Commands registered");
	} catch (error) {
		console.error(error);
	}
})();
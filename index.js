require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const fun = require("./functions.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => console.log(`${client.user.username} is online.`));

fun.readLocations();

client.on('interactionCreate', (interaction) => {

  if (interaction.commandName === 'Add to tracker'){
    var targetMessage = interaction.targetMessage.content;
     if(targetMessage == ''){
      //console.log("Content is empty.")
      targetMessage = interaction.targetMessage.messageSnapshots.values().next().value.content;
     }
    //console.log(interaction.targetMessage.messageSnapshots);
    console.log(targetMessage);
    allCoords = targetMessage.match(/-?\d+(?:\.\d+)?,\s*-?\d+(?:\.\d+)?/g);
    authorUsername = interaction.targetMessage.author.username;

    coords = "";
    if(allCoords == null){
      interaction.reply(
        {content: "No coordinates found!", ephemeral: true}
      );
      return;
    } else {
      coords = allCoords[0].split(",");
    }
    fun.writeLocation(coords[0], coords[1], authorUsername);
    // interaction.reply(
      // {content: `Coordinates: ${coords} \n Added to tracker`, ephemeral: true}
    // );
	console.log(`Coordinates: ${coords} \n Added to tracker`);
  } else if (interaction.commandName === 'manualadd'){
    const username = interaction.options.getString('username');
    const coords = interaction.options.getString('coords');

    var splitCoords = coords.split(",");

    fun.writeLocation(splitCoords[0], splitCoords[1], username);
    interaction.reply(
      {content: `Coordinates: ${splitCoords} \n Added to tracker`, ephemeral: true}
    );
  }
});

client.login(process.env.TOKEN);

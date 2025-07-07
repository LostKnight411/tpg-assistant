# TPG Assistant

TPG Assistant currently just has one major feature: Given a CSV of one or more locations from Google MyMaps, it allows someone to simply right click messages in Discord to read the coordinates from them and add them to a Google MyMaps compatible CSV of submissions. 

Contact Knight411 (username knight) in Discord if you have any questions or feature requests. This is my first time writing installation instructions for something like this so I might've missed a step.

The code is a bit of a mess. I threw the entire project together pretty quickly in some free time.

### Limitations
- Submissions are saved by the submiter's username rather than their display name
- Coordinates in the target message must be fully decimal
- Locations and submissions must be manually exported from and imported to Google MyMaps. This is because MyMaps has no API.
- The entire thing is a bit janky to set up

## Usage Guide:
1. Place your exported Locations and Submissions in the folder with index.js
2. Rename them to "locations.csv" and "submissions.csv" respectivly
3. Open Powershell or the Command Prompt and start the bot with "node index.js"
4. Add submissions by right clicking them -> "Apps" -> "Add to tracker" *or* you can do "/manualsubmit [username] [decimal coordinates]"
  - The latter is useful when someone submits with non-decimal coordinates or in a format the app can't otherwise read.

## Installation Guide:

### Prerequisites:
1. Node.js https://nodejs.org/en/download

### Installation Steps:
1. Create a Discord Bot Account.
  - I recommend following the guide here: https://discordpy.readthedocs.io/en/stable/discord.html
  - Name the application whatever you'd like, do not make it a public bot. **Make sure to copy the bot's token when it is revealed.**
2. Copy the bot's token to ".env.example" and replace the example text. Do the same with the bot's Application ID. You should now rename this file to just ".env"
3. Open the "Installation" page on the sidebar
4. Check "User Install", as this application is only being installed to your own Discord account.
5. Under "Default Install Settings" search for and add the scope "applications.commands". Save the settings.
6. Copy the Install Link into your browser and authorize the bot on your account
7. Download all of the files from this github repo and place them wherever you'd like.
8. Open a command prompt inside of the folder and type "npm install" and complete the install. This downloads the extra node.js files the app needs to run.
9. When the installation completes type "node commands.js". 
10. Close and restart Discord completely.
11. You're done! Now you can run the application in the command prompt by typing "node index.js". Any errors the app runs into should appear in that command prompt, so please share them with Knight if you run into problems.
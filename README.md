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

You can re-import the submissions.csv into Google MyMaps just like you exported it. If you open the CSV in a program like Excel you can sort them by distance and that sorting will stay when imported into MyMaps.

## Installation Guide:

### Prerequisites:
1. Node.js https://nodejs.org/en/download

### Installation Steps:
1. Download all of the files from this github repo and place them wherever you'd like.
2. Create a Discord Bot Account.
  - I recommend following the guide here: https://discordpy.readthedocs.io/en/stable/discord.html
  - Name the application whatever you'd like, do not make it a public bot.
3. Go to "Bot" on the sidebar and click "Reset Token". Confirm, and the page will give you a token.
4. Copy the bot's token to ".env.example" and replace the example text.
  - Do the same with the bot's Application ID on the General Information page.
  - You should now rename this file to just ".env"
5. Still in the "Bot" section, check the boxes to enable "SERVER MEMBERS INTENT" and "MESSAGE CONTENT INTENT"
6. Open the "Installation" page on the sidebar
7. Check "User Install", as this application is only being installed to your own Discord account.
8. Copy the Install Link into your browser and authorize the bot on your account
9. Open a command prompt inside of the folder and type "npm install" and complete the install. This downloads the extra node.js files the app needs to run.
10. When the installation completes type "node commands.js". 
11. Close and restart Discord completely.
12. You're done! Now you can run the application in the command prompt by typing "node index.js". Any errors the app runs into should appear in that command prompt, so please share them with Knight if you run into problems.

## Upcoming Features
1. Ability to save alternate display names for usernames to show up on the tracker
2. Optional automatic sorting of submissions by distance

import { Interaction } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
import { start } from "./data/utils";
import { refreshCommands } from "./discord/registerCommands";
import { sendMessage } from "./discord/sendMessage";

// Instance the Discord client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// Log in the console the current bot name
client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

// Manage the interactions with slash commands
client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // TODO: Automatize and add types.
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

// Refresh the commands
refreshCommands();

// Start bot
start((activeGames) => {
  // Everytime the bot fetch new data this will run
  if (activeGames?.size === 0) return;

  let totalPlayers = 0;
  let msg = "Warning! **[ $totalPlayers ]** Captain level Reiatsu detected!";

  // Add the data to msg
  activeGames?.forEach((v) => {
    totalPlayers += v.players;
    msg += `\n( **${v.players}** ) - ${v.name}`;
  });

  // Add the totalPlayers
  msg = msg.replace("$totalPlayers", totalPlayers.toString());

  // Send the message
  sendMessage(msg);
});

export { client };

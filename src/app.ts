import { Interaction, REST, Routes } from "discord.js";

import { Client, GatewayIntentBits } from "discord.js";
import { start } from "./data/utils";
import { refreshCommands } from "./registerCommands";
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

// const channel = client.channels.fetch("1065838396121042947").then(c => c.);
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN!);

rest.post(Routes.channelMessages("1065838396121042947"), {
  body: { content: "Test" },
});

// Refresh the commands
refreshCommands();

// Start bot
start(() => {});

export { client };

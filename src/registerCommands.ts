import { REST, Routes } from "discord.js";
import "dotenv/config";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN!);

const refreshCommands = async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    const appId = process.env.APP_ID!;

    await rest.put(Routes.applicationCommands(appId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

export { refreshCommands };

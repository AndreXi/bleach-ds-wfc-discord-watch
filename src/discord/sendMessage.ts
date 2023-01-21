import { REST, Routes } from "discord.js";

function sendMessage(msg: string) {
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN!);

  rest.post(Routes.channelMessages(process.env.TARGET_CHANNEL!), {
    body: { content: msg },
  });
}

export { sendMessage };

import { ChannelType, Snowflake, TextChannel } from "discord.js";
import { client } from "../app";
import "dotenv/config";

let lastMessageId: Snowflake;

async function editOrSendMessage(msg: string) {
  let channel = await client.channels.fetch(process.env.TARGET_CHANNEL!);
  if (channel?.type === ChannelType.GuildText) {
    channel = channel as TextChannel;
    if (!lastMessageId) {
      // Create a new message
      const message = await channel.send(msg);
      lastMessageId = message.id;
    } else {
      // Fetch messages
      const oldMessage = channel.messages.cache.get(lastMessageId);

      // Remove the message if the content is different
      if (oldMessage?.content !== msg) {
        oldMessage?.delete();
        const message = await channel.send(msg);
        lastMessageId = message.id;
      }
    }
  }
}

async function deleteLastMessage() {
  if (!lastMessageId) return;
  let channel = await client.channels.fetch(process.env.TARGET_CHANNEL!);
  if (channel?.type === ChannelType.GuildText) {
    channel = channel as TextChannel;
    const oldMessage = channel.messages.cache.get(lastMessageId);
    oldMessage?.delete();
  }
}

export { editOrSendMessage, deleteLastMessage };

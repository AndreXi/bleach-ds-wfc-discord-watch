import "dotenv/config";
import { client } from "./src/app";

client.login(process.env.DISCORD_TOKEN);

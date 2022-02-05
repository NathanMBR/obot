import {
	Client,
	ClientOptions,
	Intents
} from "discord.js";
import { AUTH_KEY } from "./configs";

const clientSettings: ClientOptions = {
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
};

const client = new Client(clientSettings);
client.login(AUTH_KEY);
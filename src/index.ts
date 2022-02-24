import {
	Client,
	ClientOptions,
	Intents
} from "discord.js";
import { setupEventListeners } from "@/helpers";
import { AUTH_KEY } from "@/configs";

const clientSettings: ClientOptions = {
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
};

const client = new Client(clientSettings);
setupEventListeners(client);
client.login(AUTH_KEY);
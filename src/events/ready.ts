/* eslint-disable no-console */
import { Client } from "discord.js";
import { setPresence } from "@/helpers";

export const handleReady = (client: Client<boolean>) => {
	if (client.user) {
		const {
			username,
			discriminator
		} = client.user;

		setPresence(client);

		console.log(`Successfully logged in as ${username}#${discriminator}`);
	} else {
		console.error("The bot couldn't be initialized.");
		process.exit(1);
	}
};
/* eslint-disable no-console */
import { Client } from "discord.js";

export const handleReady = (client: Client<boolean>) => {
	if (client.user) {
		const { username, discriminator } = client.user;
		console.log(`Successfully logged in as ${username}#${discriminator}`);
	} else {
		console.error("The bot couldn't be initialized.");
		process.exit(1);
	}
};
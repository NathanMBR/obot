import { Message } from "discord.js";

export const defaultService = async (message: Message<boolean>, inexistentCommand: string) => {
	await message.reply(
		inexistentCommand
			? `Command \`${inexistentCommand}\` not found.`
			: "You need to insert a command."
	);
};
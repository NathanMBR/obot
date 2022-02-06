import { Message } from "discord.js";

export const defaultService = async (message: Message<boolean>, splitCommand: Array<string>) => {
	const inexistentCommand = splitCommand[1];

	await message.reply(
		inexistentCommand
			? `Command \`${splitCommand[1]}\` not found.`
			: "You need to insert a command."
	);
};
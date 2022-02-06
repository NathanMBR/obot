import { Message, Awaitable } from "discord.js";
import { PREFIX } from "@/configs";
import { commandsList } from "@/commands";

export const handleMessageCreate = (message: Message): Awaitable<void> => {
	const splitCommand = message.content.split(" ");
	const controllerInjection = { message, splitCommand };

	if (
		splitCommand[0] === PREFIX.toLowerCase() ||
		splitCommand[0] === PREFIX.toUpperCase()
	) {
		const command = commandsList[splitCommand[1]] || commandsList.default;
		command(controllerInjection);
	}
};
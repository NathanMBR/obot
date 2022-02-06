import { Collection, Message } from "discord.js";

export const clearService = (fetchedMessages: Collection<string, Message<boolean>>) => {
	fetchedMessages.forEach(
		fetchedMessage => {
			fetchedMessage.deletable
				? fetchedMessage.delete()
				: fetchedMessage.reply("For some unknown reason, this message can't be deleted.");
		}
	);
};
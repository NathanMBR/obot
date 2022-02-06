/* eslint-disable no-await-in-loop */
import { Collection, Message } from "discord.js";

export const clearService = async (fetchedMessages: Collection<string, Message<boolean>>) => {
	for (const [_key, fetchedMessage] of fetchedMessages)
		fetchedMessage.deletable
			? await fetchedMessage.delete()
			: await fetchedMessage.reply("For some unknown reason, this message can't be deleted.");
};
import { Message, ChannelLogsQueryOptions, Collection } from "discord.js";

export const clearResource = async (message: Message<boolean>, searchOptions: ChannelLogsQueryOptions): Promise<Collection<string, Message<boolean>>> => {
	const fetchedMessages = await message.channel.messages.fetch(searchOptions);
	return fetchedMessages;
};
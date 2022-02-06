import { Message } from "discord.js";
import { getMentionString } from "@/helpers";

export const pingService = async (message: Message) => {
	const delay = new Date().getTime() - message.createdTimestamp;
	const mention = getMentionString(message.author.id);

	await message.reply(`${mention} Pong! (delay: \`${delay} ms\`)`);
};
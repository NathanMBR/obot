import { Message } from "discord.js";

export const pingService = async (message: Message, delay: number, mention: string) => {
	await message.reply(`${mention} Pong! (delay: \`${delay} ms\`)`);
};
import { Message } from "discord.js";

export const obodeService = async (message: Message<boolean>, mention: string) => {
	await message.reply(`${mention} OBOT`);
};
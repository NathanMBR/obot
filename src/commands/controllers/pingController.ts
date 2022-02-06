/* eslint-disable no-console */
import { IControllerInjection } from "@/types";
import { getMentionString } from "@/helpers";
import { pingService } from "@/commands";

export const pingController = async ({ message }: IControllerInjection) => {
	try {
		const delay = new Date().getTime() - message.createdTimestamp;
		const mention = getMentionString(message.author.id);

		await pingService(message, delay, mention);
	} catch (error) {
		console.error("An internal error occurred. Error:\n", error);
		message.reply("An internal error occurred and the request can't be successfully finished.");
	}
};
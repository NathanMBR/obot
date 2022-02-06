/* eslint-disable no-console */

import { IControllerInjection } from "@/types";
import { getMentionString } from "@/helpers";
import { obodeService } from "@/commands";

export const obodeController = async ({ message }: IControllerInjection) => {
	try {
		const mention = getMentionString(message.author.id);

		await obodeService(message, mention);
	} catch (error) {
		console.error("An internal error occurred. Error:\n", error);
		message.reply("An internal error occurred and the request can't be successfully finished.");
	}
};
/* eslint-disable no-console */

import { IControllerInjection } from "@/types";
import {
	clearValidator,
	nonMockableClearValidator,
	clearResource,
	clearService
} from "@/commands";
import { ChannelLogsQueryOptions } from "discord.js";
import { ValidationError } from "@/errors";

export const clearController = async ({ message, splitCommand }: IControllerInjection) => {
	try {
		const messagesQuantity = Number(splitCommand[2]);
		const searchOptions: ChannelLogsQueryOptions = {
			limit: messagesQuantity
		};

		clearValidator(messagesQuantity);
		nonMockableClearValidator(message);

		const fetchedMessages = await clearResource(message, searchOptions);
		await clearService(fetchedMessages);
	} catch (error) {
		if (error instanceof ValidationError)
			message.reply(error.message);
		else {
			console.error("An internal error occurred. Error:\n", error);
			message.reply("An internal error occurred and the request can't be successfully finished.");
		}
	}
};
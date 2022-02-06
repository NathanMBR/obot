/* eslint-disable no-console */
import { pingService } from "@/commands";
import { IControllerInjection } from "@/types";

export const pingController = async ({ message }: IControllerInjection) => {
	try {
		await pingService(message);
	} catch (error) {
		console.error("An internal error occurred. Error:\n", error);
		message.reply("An internal error occurred and the request can't be successfully finished.");
	}
};
/* eslint-disable no-console */

import { IControllerInjection } from "@/types";
import { defaultService } from "../services";

export const defaultController = async ({ message, splitCommand }: IControllerInjection) => {
	try {
		await defaultService(message, splitCommand);
	} catch (error) {
		console.error("An internal error occurred. Error:\n", error);
		message.reply("An internal error occurred and the request can't be successfully finished.");
	}
};
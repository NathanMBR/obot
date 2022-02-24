import { Message, Permissions } from "discord.js";
import { ValidationError } from "@/errors";

export const clearValidator = (quantity: number): void => {
	if (
		typeof quantity !== "number" ||
		Number.isNaN(quantity)
	)
		throw new ValidationError("Invalid number argument.");

	if (quantity <= 0)
		throw new ValidationError("The quantity must be greater than zero.");

	if (quantity > 50)
		throw new ValidationError("The quantity must be less than or equal to 50.");
};

export const nonMockableClearValidator = (message: Message<boolean>) => {
	if (
		!message.member?.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)
	)
		throw new ValidationError("You don't have the necessary permissions to use this command.");
};
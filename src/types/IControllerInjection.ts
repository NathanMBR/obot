import { Message } from "discord.js";

export interface IControllerInjection {
	message: Message<boolean>,
	splitCommand: Array<string>
}
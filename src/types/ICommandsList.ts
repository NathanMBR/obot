import { IControllerInjection } from "@/types";
import { Awaitable } from "discord.js";

/* eslint-disable no-unused-vars */
export interface ICommandsList {
	[command: string]: (controllerInjection: IControllerInjection) => Awaitable<void>
}
import { Client } from "discord.js";
import {
	handleReady,
	handleError,
	handleMessageCreate
} from "@/events";

export const setupEventListeners = (client: Client<boolean>) => {
	client.once("ready", handleReady);
	client.on("error", handleError);
	client.on("messageCreate", handleMessageCreate);
};
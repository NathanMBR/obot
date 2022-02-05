import { Client } from "discord.js";
import {
	handleReady,
	handleError
} from "@/events";

export const setupEventListeners = (client: Client<boolean>) => {
	client.once("ready", handleReady(client));
	client.on("error", handleError);
};
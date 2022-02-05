import { Client } from "discord.js";
import {
	handleReady
} from "@/events";

export const setupEventListeners = (client: Client<boolean>) => {
	client.once("ready", handleReady(client));
};
import { ActivitiesOptions, Client } from "discord.js";
import { PREFIX } from "@/configs";

const activities: Array<ActivitiesOptions> = [
	{
		name: `${PREFIX}`,
		type: 2
	}
];

export const setPresence = (client: Client<boolean>) => client.user
	?.setPresence({
		status: "online",
		afk: false,
		activities
	});
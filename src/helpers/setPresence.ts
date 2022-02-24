import { ActivitiesOptions, Client } from "discord.js";

const activitiesList: Array<ActivitiesOptions> = [
	{
		name: "!obot",
		type: 2
	}
];

export const setPresence = (client: Client<boolean>) => client.user
	?.setPresence({
		status: "online",
		afk: false,
		activities: activitiesList
	});
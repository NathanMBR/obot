import { ICommandsList } from "@/types";
import {
	defaultController,
	clearController,
	pingController
} from "@/commands";

export const commandsList: ICommandsList = {
	default: defaultController,
	clear: clearController,
	ping: pingController
};
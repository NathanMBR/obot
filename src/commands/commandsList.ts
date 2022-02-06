import { ICommandsList } from "@/types";
import {
	defaultController,
	clearController,
	pingController,
	obodeController
} from "@/commands";

export const commandsList: ICommandsList = {
	default: defaultController,
	clear: clearController,
	ping: pingController,
	OBODE: obodeController
};
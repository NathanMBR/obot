import { ICommandsList } from "@/types";
import {
	defaultController,
	clearController
} from "@/commands";

export const commandsList: ICommandsList = {
	default: defaultController,
	clear: clearController
};
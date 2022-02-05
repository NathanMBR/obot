import dotenv from "dotenv";
dotenv.config();

export const AUTH_KEY = process.env.AUTH_KEY as string;
export const PREFIX = process.env.PREFIX as string;
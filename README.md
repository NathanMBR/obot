# OBOT
Obot is a Discord bot made to clear messages from the chats. He's inspired in Ornn, my favorite League of Legends champion (and the best one).

## Setup

1. Install dependencies with `yarn install` (preferred) or `npm install`
2. Add PREFIX and AUTH_KEY environment variables
3. Run `yarn qs` to compile and run the code

## Commands
| **Command** | **Usage** | **Definition** |
| --- | --- | --- |
| Clear | `<prefix> clear <quantity>` | Clears the specified amount of messages in the chat it's used. Can't clean more than 20 messages at a time |
| Ping | `<prefix> ping` | Replies with "pong" and the message delay. Delay is calculated using two different timestamps, so imprecision is expected |
| OBODE | `<prefix> OBODE` | Replies with "OBOT" (inside joke) |
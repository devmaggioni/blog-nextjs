import pino from "pino"
import * as dotenv from "dotenv"
dotenv.config()

const pinoConfig = {
	level: process.env?.BOT_LOGGER_LEVEL || "info",
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
			levelFirst: true
		}
	}
}

const logger = pino(pinoConfig)
export default logger
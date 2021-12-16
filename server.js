const express = require("express");
const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const key = process.env.KEY;
const bot = new Telegraf(key);

bot.command("home", (ctx) => {
	let user = ctx.from.first_name;
	ctx.reply(`Welcome ${user}`);
});

bot.command("about", Telegraf.reply("About"));
bot.command("help", Telegraf.reply("Help"));

bot.hears("quit", (ctx) => {
	ctx.reply("Session ended");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

const app = express();
app.listen(3801, () => console.log("Example app is listening on port 3801."));

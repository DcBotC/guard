const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require("express");
const app = express();
const http = require("http");
const coderlab = new Discord.ShardingManager("./bot.js", {
  totalShards: 1,
  token: "NzU2Nzg1MzE5MjU2MjYwNjI4.X2W5QA.EoAmpAn6lIT98yNJ6MUDIVMYrJA"
});

coderlab.spawn();

coderlab.on("launch", shard => {
  console.log(`${shard.id} id.`);

});

setTimeout(() => {
  coderlab.broadcastEval("process.exit()");
}, 21600000);

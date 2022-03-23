require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token
CLIENT_TOKEN=(your bot token here)
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
{
  memes: [
    {
      author: 'NaveenTheBean',
      nsfw: false,
      subreddit: 'memes',
      title: 'Have a Snickers',
      upvotes: 15122,
      url: 'https://i.redd.it/tde2okjfyaz61.jpg'
    }
  ]
}
//add this function below client.on('message' ...
async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  return res.data.memes[0].url;
}
const axios = require('axios'); //add this line at the top
client.on('message', async msg => {
  switch (msg.content) {
    case "ping":
      msg.reply("Pong!");
      break;
    //our meme command below
    case "!meme":
      msg.channel.send("Here's your meme!"); //Replies to user command
      const img = await getMeme(); //fetches an URL from the API
      msg.channel.send(img); //send the image URL
      break;
   }
})
let interval;

client.on('message', async msg => {
  switch (msg.content) {
   //other commands above here...
   case "!eye":
      msg.channel.send("You are now subscribed to eye reminders.");
       interval = setInterval (function () {
        msg.channel.send("Please take an eye break now!")
        .catch(console.error); 
      }, 3600000); //every hour
      break;
  }
  //add this below the !eye case block
   case "!stop":
      msg.channel.send("I have stopped eye reminders.");
      clearInterval(interval);
      break;
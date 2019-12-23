/*
BOT INITIALISATION
=================================================================================================
===================================================================================================
*/
const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "!";
/*
BOT INITIALISATION END
================================================================================================
================================================================================================
*/
/*
GLOBAL VARIABLES SECTION START
================================================================================================
================================================================================================
*/
var version = "version: 1.0.0";
var valor =
  "https://images-na.ssl-images-amazon.com/images/I/616EJubh6cL._SX425_.jpg";
var insinct =
  "https://cdn.shopify.com/s/files/1/0715/4345/products/team-instinct-cutout_145e1356-5d14-4e48-8a01-d62a7e2d2509_1024x1024@2x.jpg?v=1527603647";
var mystic =
  "https://res.cloudinary.com/teepublic/image/private/s--ZUo8XElB--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1468523531/production/designs/584536_1.jpg";
var rocket =
  "https://cdnb.artstation.com/p/assets/images/images/009/032/679/large/sean-o-neill-team-rocket-logo.jpg?1516743259";
const red = 0xc0392b;
const yellow = 0xf1c40f;
const blue = 0x0652dd;
const neutral = 0x44bd32;
const white = 0xdfe6e9;
let displayEmbed;
/*GLOBAL VARS SECTION END
================================================================================================
================================================================================================
*/
/*INITAL BOT RESPONSE COMMAND TEST
================================================================================================
================================================================================================
*/
bot.on("ready", () => {
  console.log("This Bot is Online");
});

bot.on("message", message => {
  if (message.isMemberMentioned(bot.user)) {
    message.reply("Server Bot is Online");
  }
});
//MEMBER JOIN COMMAND
bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    channel => channel.name === "welcome"
  );
  if (!channel) return;

  channel.send("Weclome to the Server " + member);
});
/*INITIAL BOT COMMAND TEST END
================================================================================================
================================================================================================
*/
bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  /*ADDING MEMBER TEAM ROLES START
================================================================================================
================================================================================================
*/
  switch (args[0]) {
    case "team":
      let memberRoleIns = message.member.guild.roles.find(
        role => role.name === "Instinct"
      );
      let memberRoleMys = message.member.guild.roles.find(
        role => role.name === "Mystic"
      );
      let memberRoleVal = message.member.guild.roles.find(
        role => role.name === "Valor"
      );
      let memberRoleRoc = message.member.guild.roles.find(
        role => role.name === "Rocket"
      );
      var userTeam = args[1];
      if (userTeam === "Instinct") {
        message.member.addRole(memberRoleIns);
        message.reply("You are in team: " + userTeam);
      }
      if (userTeam === "Mystic") {
        message.member.addRole(memberRoleMys);
        message.reply("You are in team: " + userTeam);
      }
      if (userTeam === "Valor") {
        message.member.addRole(memberRoleVal);
        message.reply("You are in team: " + userTeam);
      }
      if (userTeam === "Rocket") {
        message.member.addRole(memberRoleRoc);
        message.reply("You are in team: " + userTeam);
        message.channel.send("Welcome!", { files: ["Meowth_anime.png"] });
      }
      var possibilies = [
        "instinct",
        "valor",
        "mystic",
        "rocket",
        "Mystic",
        "Instinct",
        "Valor",
        "Rocket"
      ];
      var Lower = ["instinct", "valor", "mystic", "rocket"];
      if (Lower.includes(userTeam)) {
        message.reply("Please Captialize");
      }
      if (possibilies.includes(userTeam) === false) {
        const error = new Discord.RichEmbed();
        error
          .setTitle("Warning Invalid Number Of Arguments")
          .addField("Usage:", "!team <team name>")
          .setColor(red);
        message.reply(error);
      }
      break;
    /*
END OF ADDING TEAM ROLES
================================================================================================
================================================================================================
*/
    /*
START OF PING COMMAND
================================================================================================
================================================================================================
*/
    case "ping":
      message.reply("pong!");
      break;
    /*END OF PING COMMAND 
================================================================================================
================================================================================================
START OF WEBSITE COMMAND
*/
    case "websites":
      message.channel.send("https://thesilphroad.com/");
      break;
    case "info":
      if (args[1] === "version") {
        message.channel.send(version);
      } else {
        message.channel.send("Made by Me_Richard1");
      }
      break;
    case "clear":
      if (!args[1]) {
        return message.reply("Error please define a second argument");
      } else {
        if (message.member.roles.find(r => r.name === "Admin")) {
          message.channel.bulkDelete(args[1]);
        } else {
          const errorRole = new Discord.RichEmbed();
          errorRole
            .setTitle("You Do Not Have Permission to use this Command")
            .addField(`*Think this is wrong?*`, "message @admin")
            .setColor(red);
          message.reply(errorRole);
        }
      }

      break;
    /*
END OF ADIMIN INFO COMMANDS
================================================================================================
================================================================================================
*/
    /*HELP COMMAND SECTION
================================================================================================
================================================================================================
*/
    case "help":
      if (message.content.startsWith("!")) {
        const HelpEmbed = new Discord.RichEmbed()
          .setTitle("__Commands:__")
          .addField(`${PREFIX}ping`, "Try this if you're borded")
          .addField(`${PREFIX}websites`, "List websites")
          .addField(`${PREFIX}info [none or version]`, "Server Info")
          .addField("Show Help Commands", `${PREFIX}help`)
          .addField(`${PREFIX}embed [PoGo team]`, "Get Team card:")
          .addField(`${PREFIX}spam [none or word]`, "Spamming")
          .addField(`${PREFIX}link`, "Server Invite link")
          .setColor("0x6c5ce7");
        message.channel.send(HelpEmbed);
      }

      break;
    /*
END OF HELP COMMAND 
================================================================================================
================================================================================================   
EMBED SECTION
===============================================================================================
===============================================================================================

*/
    case "embed":
      var OnlyAccept = ["instinct", "mystic", "valor", "rocket"];
      if (OnlyAccept.includes(args[1])) {
        if (args[1] === "instinct") {
          var userTeam = "Instinct";
          var team = insinct;
          var color = yellow;
          displayEmbed = true;
        }
        if (args[1] === "mystic") {
          var userTeam = "Mystic";
          var team = mystic;
          var color = blue;
          displayEmbed = true;
        }
        if (args[1] === "valor") {
          var userTeam = "Valor";
          var team = valor;
          var color = red;
          displayEmbed = true;
        }
        if (args[1] === "rocket") {
          var userTeam = "Rocket";
          var team = rocket;
          var color = white;
          displayEmbed = true;
        }
      } else {
        displayEmbed = false;
        const EmbedError = new Discord.RichEmbed()
          .setTitle("Warning Invalid Number Of Arguments")
          .addField("Usage", "!embed <team name>")
          .setColor(red);
        message.reply(EmbedError);
        var team =
          "https://vignette.wikia.nocookie.net/sonicpokemon/images/9/9d/Pichu.png/revision/latest?cb=20120801034542";
        var color = neutral;
      }
      if (displayEmbed === true) {
        const embed = new Discord.RichEmbed()
          .setTitle("User information")
          .addField("Player Name", message.author.username)
          .addField("Player Team", userTeam)
          .setColor(color)
          .setThumbnail(team);
        message.channel.send(embed);
      }
      break;
    /*
END OF EMBED 
================================================================================================
================================================================================================
*/
    /*SPAM COMMAND 
================================================================================================
================================================================================================
*/
    case "spam":
      if (message.channel.name === "spam") {
        try {
          var i;
          if (args[1] !== " ") {
            for (i = 0; i < 15; i++) {
              message.channel.send(args[1]);
            }
          } else if (args[1] === " ") {
            for (i = 0; i < 15; i++) {
              message.channel.send("Hello!");
            }
          }
        } finally {
          return;
        }
      } else {
        var channel = message.guild.channels.find(
          channel => channel.name === "spam"
        );
        message.channel.send(
          "WARNING please send that in the " + channel + " channel instead"
        );
      }
      break;
    /*
END OF SPAM COMMAND 
================================================================================================
================================================================================================
*/
    /*INVITE LINK
================================================================================================
================================================================================================
*/

    case "invite":
      message.reply("https://discord.gg/9ryrpxU");
      break;
  }
});

bot.login(process.env.token);

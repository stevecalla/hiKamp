const { User } = require("../models");
const bcrypt = require("bcrypt");

// USE TO GET A HASHED PASSWORD FOR THE USERDATA OBJECT BELOW
// let passwordCrypt = async (pass) => {
//   let b = await bcrypt.hash(pass, 10);
//   return b;
// }
// passwordCrypt('password1234');

const userdata = [
  {
    username: "Tucker Oak",
    email: "yeagland0@deviantart.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Moss Fern",
    email: "sshwenn1@comsenz.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Cuban Hemp",
    email: "amaypes2@php.net",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Howell's Stitchwort",
    email: "egerok3@ifeng.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Scaphyglottis",
    email: "nantonucci4@apple.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Twotooth Sedge",
    email: "ndelamere5@omniture.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Prairie Hawthorn",
    email: "kclewlow6@comsenz.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Harrisella",
    email: "ebiaggi7@wp.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Marginate Splashzone Moss",
    email: "cmcglynn8@vimeo.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
  {
    username: "Silky Lupine",
    email: "ielvin9@ft.com",
    password: "$2b$10$i04d5fOSq2PgJe5o1MFn8elmHAXyzJHIn5h7KxCMMlq/dqQ.XepOy",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;

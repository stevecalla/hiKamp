const { Post } = require("../models");

const postdata = [
  {
    title: "Wolf, mexican",
    content: "sed accumsan felis ut at dolor quis odio",
    user_id: 1,
  },
  {
    title: "Otter, canadian river",
    content: "quam nec dui luctus rutrum nulla",
    user_id: 2,
  },
  {
    title: "Creeper, black-tailed tree",
    content:
      "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
    user_id: 3,
  },
  {
    title: "Crab (unidentified)",
    content:
      "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    user_id: 4,
  },
  {
    title: "Common wolf",
    content: "purus eu magna vulputate luctus cum",
    user_id: 5,
  },
  {
    title: "Tortoise, burmese black mountain",
    content: "duis faucibus accumsan odio curabitur",
    user_id: 6,
  },
  {
    title: "Greater rhea",
    content:
      "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
    user_id: 7,
  },
  {
    title: "Sugar glider",
    content:
      "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
    user_id: 8,
  },
  {
    title: "Defassa waterbuck",
    content: "in quis justo maecenas rhoncus aliquam lacus",
    user_id: 9,
  },
  {
    title: "Black-tailed prairie dog",
    content:
      "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
    user_id: 10,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

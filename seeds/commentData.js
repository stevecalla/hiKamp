const { Comment } = require("../models");

const commentdata = [
  {
    content: "mi nulla ac enim in tempor turpis nec",
    user_id: 1,
    campsite_id: 1,
  },
  {
    content: "ut ultrices vel augue vestibulum ante",
    user_id: 2,
    campsite_id: 2,

  },
  {
    content: "in purus eu magna",
    user_id: 3,
    campsite_id: 3,
  },
  {
    content: "felis sed lacus morbi sem",
    user_id: 4,
    campsite_id: 4,
  },
  {
    content: "venenatis tristique fusce congue diam id",
    user_id: 5,
    campsite_id: 5,
  },
  {
    content: "venenatis tristique fusce congue diam id",
    user_id: 6,
    campsite_id: 6,
  },
  {
    content: "vestibulum proin eu mi nulla ac enim in",
    user_id: 7,
    campsite_id: 7,
  },
  {
    content: "morbi sem mauris laoreet ut rhoncus aliquet",
    user_id: 8,
    campsite_id: 8,
  },
  {
    content: "sit amet erat nulla tempus",
    user_id: 9,
    campsite_id: 9,
  },
  {
    content: "suspendisse potenti in eleifend quam a odio in",
    user_id: 10,
    campsite_id: 10,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

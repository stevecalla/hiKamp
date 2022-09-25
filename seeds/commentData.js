const { Comment } = require("../models");

const commentdata = [
  { 
    content: "mi nulla ac enim in tempor turpis nec", 
    user_id: 1, 
    post_id: 1 
  },
  { 
    content: "ut ultrices vel augue vestibulum ante", 
    user_id: 2, 
    post_id: 2 
  
  },
  { 
    content: "in purus eu magna", 
    user_id: 3, 
    post_id: 3 
  },
  { 
    content: "felis sed lacus morbi sem", 
    user_id: 4, 
    post_id: 4 
  },
  {
    content: "venenatis tristique fusce congue diam id",
    user_id: 5,
    post_id: 5,
  },
  { content: "felis donec semper", user_id: 6, post_id: 6 },
  {
    content: "vestibulum proin eu mi nulla ac enim in",
    user_id: 7,
    post_id: 7,
  },
  {
    content: "morbi sem mauris laoreet ut rhoncus aliquet",
    user_id: 8,
    post_id: 8,
  },
  { 
    content: "sit amet erat nulla tempus", 
    user_id: 9, 
    post_id: 9 
  },
  {
    content: "suspendisse potenti in eleifend quam a odio in",
    user_id: 10,
    post_id: 10,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

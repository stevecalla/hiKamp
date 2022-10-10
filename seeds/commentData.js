const { Comment } = require('../models');

const commentdata = [
  {
    user_id: 1,
    campsite_id: 'EA81BC45-C361-437F-89B8-5C89FB0D0F86',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 1,
    campsite_id: '1241C56B-7003-4FDF-A449-29DA8BCB0A41',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 2,
    campsite_id: 'ABDC6E2A-9959-4A4C-9DB6-EEF66E7C95B8',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 3,
    campsite_id: '4F9ED6A5-3ED1-443D-9E4C-859D7988F199',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 4,
    campsite_id: '9FAE941D-D7E8-4F36-A28F-8556628242BA',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 5,
    campsite_id: '6EAB2A34-0D56-4A15-99E2-E41C06B0FF86',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 6,
    campsite_id: 'AB15EC6C-7761-4DFF-A4AC-38E6A9986FB7',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 7,
    campsite_id: '4F9E59DF-BFCB-400F-8F4E-6A5233A47324',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 8,
    campsite_id: 'E7CC7363-9C34-42ED-B3F0-769BB39E9400',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 9,
    campsite_id: '3CCB0AF7-A364-4490-A788-EE00700BD108',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 10,
    campsite_id: '03608E50-3CA0-4AEA-9E6C-146FBD6D204B',
    content: 'This location is beautiful. I look forward to visiting again.',
  },
  {
    user_id: 1,
    campsite_id: 'F3D4A32A-B2CA-4E38-B049-C90164E4540A',
    content: 'Wow, this site was amazing!  The glaciers on the mountains are snow-covered all year!  Definitely coming back to this one!',
  },
  {
    user_id: 2,
    campsite_id: 'F3D4A32A-B2CA-4E38-B049-C90164E4540A',
    content: "It was ok, but kinda noisy.  Too many people, prob won't come back this way again.",
  },
  {
    user_id: 10,
    campsite_id: '13674F30-F2B4-4254-BD42-036039834FA0',
    content: "This is one of the most amazing places I've ever seen.  Can't wait to come back!",
  },
  {
    user_id: 7,
    campsite_id: '13674F30-F2B4-4254-BD42-036039834FA0',
    content: "I really enjoyed my stay here.  We're on a 6 month road trip across the US right now, and this was one of our favorite campgrounds.",
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

const { Comment } = require('../models');

const commentdata = [
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 413,
    content: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  { username: "Pat",
    user_id: 3, campsite_id: 219, content: 'Ut tellus.' },
  { username: "Pat",
    user_id: 3, campsite_id: 46, content: 'Nam tristique tortor eu pede.' },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 177,
    content:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
  },
  { username: "Pat",
    user_id: 1, campsite_id: 350, content: 'Donec vitae nisi.' },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 172,
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
  },
  { username: "Pat",
    user_id: 4, campsite_id: 101, content: 'Praesent lectus.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 62,
    content: 'Suspendisse accumsan tortor quis turpis.',
  },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 180,
    content: 'Ut at dolor quis odio consequat varius.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 150,
    content: 'Quisque id justo sit amet sapien dignissim vestibulum.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 568,
    content:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 547,
    content: 'Praesent id massa id nisl venenatis lacinia.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 167,
    content: 'Morbi vel lectus in quam fringilla rhoncus.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 250,
    content:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 165,
    content: 'Ut tellus. Nulla ut erat id mauris vulputate elementum.',
  },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 462,
    content: 'Maecenas tincidunt lacus at velit.',
  },
  { username: "Pat",
    user_id: 6, campsite_id: 535, content: 'Proin risus. Praesent lectus.' },
  { username: "Pat",
    user_id: 4, campsite_id: 525, content: 'Donec semper sapien a libero.' },
  { username: "Pat",
    user_id: 10, campsite_id: 254, content: 'Nullam varius. Nulla facilisi.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 50,
    content: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
  },
  { username: "Pat",
    user_id: 6, campsite_id: 293, content: 'Donec semper sapien a libero.' },
  { username: "Pat",
    user_id: 9, campsite_id: 423, content: 'In quis justo.' },
  { username: "Pat",
    user_id: 3, campsite_id: 111, content: 'Cras pellentesque volutpat dui.' },
  { username: "Pat",
    user_id: 4, campsite_id: 317, content: 'Nullam varius. Nulla facilisi.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 267,
    content: 'In quis justo. Maecenas rhoncus aliquam lacus.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 469,
    content:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 274,
    content: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 119,
    content: 'Etiam justo. Etiam pretium iaculis justo.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 417, content: 'Aliquam erat volutpat.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 491,
    content: 'Suspendisse ornare consequat lectus.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 197,
    content:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
  },
  { username: "Pat",
    user_id: 5, campsite_id: 35, content: 'Sed accumsan felis.' },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 395,
    content: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 195,
    content:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
  },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 292,
    content:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 442,
    content:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
  },
  { username: "Pat",
    user_id: 5, campsite_id: 362, content: 'Phasellus in felis.' },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 285,
    content:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 245,
    content:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  },
  { username: "Pat",
    user_id: 3, campsite_id: 448, content: 'Vivamus tortor.' },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 451,
    content:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 543,
    content:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 462,
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 514,
    content: 'Vivamus vel nulla eget eros elementum pellentesque.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 86,
    content: 'Etiam faucibus cursus urna. Ut tellus.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 286,
    content: 'Phasellus sit amet erat. Nulla tempus.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 312, content: 'Morbi ut odio.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 260,
    content:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 450,
    content: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 479,
    content:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 9,
    content:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
  },
  { username: "Pat",
    user_id: 5, campsite_id: 340, content: 'Nulla ac enim.' },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 379,
    content: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  },
  { username: "Pat",
    user_id: 5, campsite_id: 200, content: 'Sed accumsan felis.' },
  { username: "Pat",
    user_id: 4, campsite_id: 151, content: 'Fusce consequat. Nulla nisl.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 559,
    content: 'In hac habitasse platea dictumst.',
  },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 7,
    content:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 369,
    content:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 479,
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 590,
    content: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 342,
    content: 'Duis consequat dui nec nisi volutpat eleifend.',
  },
  { username: "Pat",
    user_id: 1, campsite_id: 172, content: 'Sed sagittis.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 168,
    content:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  },
  { username: "Pat",
    user_id: 4, campsite_id: 580, content: 'Nunc rhoncus dui vel sem.' },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 22,
    content: 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 314,
    content: 'Ut at dolor quis odio consequat varius.',
  },
  { username: "Pat",
    user_id: 4, campsite_id: 236, content: 'Donec posuere metus vitae ipsum.' },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 361,
    content:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  { username: "Pat",
    user_id: 6, campsite_id: 199, content: 'In blandit ultrices enim.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 123,
    content:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 558,
    content: 'Morbi quis tortor id nulla ultrices aliquet.',
  },
  { username: "Pat",
    user_id: 8, campsite_id: 447, content: 'In quis justo.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 79,
    content:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 553,
    content: 'Phasellus id sapien in sapien iaculis congue.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 187,
    content:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 23,
    content: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  },
  { username: "Pat",
    user_id: 10, campsite_id: 540, content: 'Suspendisse potenti.' },
  { username: "Pat",
    user_id: 6, campsite_id: 187, content: 'Cras pellentesque volutpat dui.' },
  { username: "Pat",
    user_id: 4, campsite_id: 69, content: 'Duis ac nibh.' },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 358,
    content:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 287, content: 'Aliquam non mauris.' },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 114,
    content: 'Nullam porttitor lacus at turpis.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 491,
    content:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 284,
    content: 'Aliquam non mauris. Morbi non lectus.',
  },
  { username: "Pat",
    user_id: 10, campsite_id: 150, content: 'Nulla nisl. Nunc nisl.' },
  { username: "Pat",
    user_id: 5, campsite_id: 416, content: 'Nunc rhoncus dui vel sem.' },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 537,
    content:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
  },
  { username: "Pat",
    user_id: 7, campsite_id: 372, content: 'Nulla facilisi.' },
  { username: "Pat",
    user_id: 8, campsite_id: 401, content: 'Aliquam erat volutpat.' },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 85,
    content: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 89, content: 'In congue. Etiam justo.' },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 39,
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 149,
    content:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
  },
  { username: "Pat",
    user_id: 10, campsite_id: 437, content: 'In congue. Etiam justo.' },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 100,
    content:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 523, content: 'Donec posuere metus vitae ipsum.' },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 201,
    content: 'Vivamus vestibulum sagittis sapien.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 529,
    content: 'Suspendisse accumsan tortor quis turpis. Sed ante.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 298,
    content:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 465,
    content:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 422, content: 'Duis aliquam convallis nunc.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 503,
    content:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 231,
    content:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 418,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 596,
    content: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
  },
  { username: "Pat",
    user_id: 1, campsite_id: 223, content: 'Praesent blandit. Nam nulla.' },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 9,
    content:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 140,
    content:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
  },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 257,
    content:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 60,
    content: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 373,
    content:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
  },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 221,
    content: 'In hac habitasse platea dictumst.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 492,
    content: 'Aliquam erat volutpat. In congue.',
  },
  { username: "Pat",
    user_id: 9, campsite_id: 229, content: 'Suspendisse potenti.' },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 423,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 414,
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 421,
    content: 'Mauris ullamcorper purus sit amet nulla.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 297, content: 'Nunc rhoncus dui vel sem.' },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 504,
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 342,
    content:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
  },
  { username: "Pat",
    user_id: 8, campsite_id: 172, content: 'Fusce posuere felis sed lacus.' },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 515,
    content: 'Cras in purus eu magna vulputate luctus.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 168,
    content: 'Integer tincidunt ante vel ipsum.',
  },
  { username: "Pat",
    user_id: 7, campsite_id: 47, content: 'Praesent blandit.' },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 225,
    content: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 565,
    content: 'Aenean sit amet justo. Morbi ut odio.',
  },
  { username: "Pat",
    user_id: 1, campsite_id: 333, content: 'Praesent blandit. Nam nulla.' },
  { username: "Pat",
    user_id: 9, campsite_id: 33, content: 'Vivamus tortor.' },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 113,
    content:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 252,
    content:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 458,
    content:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
  },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 60,
    content:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
  },
  { username: "Pat",
    user_id: 3, campsite_id: 221, content: 'In eleifend quam a odio.' },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 447,
    content: 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
  },
  { username: "Pat",
    user_id: 5, campsite_id: 213, content: 'Fusce posuere felis sed lacus.' },
  { username: "Pat",
    user_id: 9, campsite_id: 9, content: 'Ut tellus.' },
  { username: "Pat",
    user_id: 4, campsite_id: 181, content: 'Nulla suscipit ligula in lacus.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 591,
    content: 'Mauris ullamcorper purus sit amet nulla.',
  },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 347,
    content:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 151,
    content:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 303,
    content:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 307,
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 446, content: 'Morbi non lectus.' },
  { username: "Pat",
    user_id: 8, campsite_id: 82, content: 'Nulla suscipit ligula in lacus.' },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 201,
    content: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
  },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 245,
    content:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
  },
  { username: "Pat",
    user_id: 5, campsite_id: 149, content: 'Nulla tempus.' },
  { username: "Pat",
    user_id: 9, campsite_id: 500, content: 'Nunc rhoncus dui vel sem.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 458,
    content: 'Donec semper sapien a libero. Nam dui.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 400,
    content:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 184,
    content:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 473,
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 305,
    content: 'In hac habitasse platea dictumst.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 542,
    content: 'Phasellus in felis. Donec semper sapien a libero.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 242,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 432,
    content: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 87,
    content: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  { username: "Pat",
    user_id: 4, campsite_id: 224, content: 'Aliquam non mauris.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 237,
    content: 'Curabitur in libero ut massa volutpat convallis.',
  },
  { username: "Pat",
    user_id: 4, campsite_id: 518, content: 'Praesent blandit. Nam nulla.' },
  { username: "Pat",
    user_id: 8, campsite_id: 493, content: 'Morbi porttitor lorem id ligula.' },
  { username: "Pat",
    user_id: 2, campsite_id: 93, content: 'Nullam varius. Nulla facilisi.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 57,
    content:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 283,
    content: 'Ut at dolor quis odio consequat varius.',
  },
  {
    username: "Pat",
    user_id: 9,
    campsite_id: 153,
    content:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 279,
    content: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
  },
  { username: "Pat",
    user_id: 3, campsite_id: 472, content: 'Aliquam non mauris.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 409,
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  {
    username: "Pat",
    user_id: 1,
    campsite_id: 332,
    content: 'Aliquam non mauris. Morbi non lectus.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 426,
    content: 'Curabitur at ipsum ac tellus semper interdum.',
  },
  { username: "Pat",
    user_id: 9, campsite_id: 384, content: 'Curabitur gravida nisi at nibh.' },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 179,
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 218,
    content:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
  },
  { username: "Pat",
    user_id: 6, campsite_id: 109, content: 'Integer a nibh.' },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 24,
    content: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 40,
    content: 'Nullam molestie nibh in lectus. Pellentesque at nulla.',
  },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 352,
    content:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 69,
    content: 'Vivamus vestibulum sagittis sapien.',
  },
  { username: "Pat",
    user_id: 2, campsite_id: 578, content: 'In congue.' },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 267,
    content:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    username: "Pat",
    user_id: 5,
    campsite_id: 373,
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
  },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 59,
    content: 'Pellentesque at nulla. Suspendisse potenti.',
  },
  {
    username: "Pat",
    user_id: 7,
    campsite_id: 9,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
  },
  { username: "Pat",
    user_id: 9, campsite_id: 599, content: 'Fusce consequat. Nulla nisl.' },
  { username: "Pat",
    user_id: 6, campsite_id: 92, content: 'Fusce consequat. Nulla nisl.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 12,
    content: 'Suspendisse potenti. In eleifend quam a odio.',
  },
  { username: "Pat",
    user_id: 8, campsite_id: 74, content: 'Aliquam non mauris.' },
  { username: "Pat",
    user_id: 1, campsite_id: 400, content: 'Suspendisse potenti.' },
  {
    username: "Pat",
    user_id: 10,
    campsite_id: 125,
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    username: "Pat",
    user_id: 2,
    campsite_id: 454,
    content: 'Aliquam erat volutpat. In congue.',
  },
  {
    username: "Pat",
    user_id: 6,
    campsite_id: 385,
    content: 'Nullam porttitor lacus at turpis.',
  },
  { username: "Pat",
    user_id: 4, campsite_id: 225, content: 'Fusce posuere felis sed lacus.' },
  { username: "Pat",
    user_id: 9, campsite_id: 434, content: 'Sed sagittis.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 219,
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  },
  { username: "Pat",
    user_id: 9, campsite_id: 229, content: 'Integer ac neque.' },
  {
    username: "Pat",
    user_id: 8,
    campsite_id: 468,
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
  },
  { username: "Pat",
    user_id: 1, campsite_id: 133, content: 'Sed ante. Vivamus tortor.' },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 141,
    content: 'Vivamus in felis eu sapien cursus vestibulum.',
  },
  {
    username: "Pat",
    user_id: 4,
    campsite_id: 356,
    content: 'Donec quis orci eget orci vehicula condimentum.',
  },
  {
    username: "Pat",
    user_id: 3,
    campsite_id: 167,
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

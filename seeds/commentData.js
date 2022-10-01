const { Comment } = require('../models');

const commentdata = [
  {
    user_id: 10,
    campsite_id: 413,
    content: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  { user_id: 3, campsite_id: 219, content: 'Ut tellus.' },
  { user_id: 3, campsite_id: 46, content: 'Nam tristique tortor eu pede.' },
  {
    user_id: 7,
    campsite_id: 177,
    content:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
  },
  { user_id: 1, campsite_id: 350, content: 'Donec vitae nisi.' },
  {
    user_id: 5,
    campsite_id: 172,
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
  },
  { user_id: 4, campsite_id: 101, content: 'Praesent lectus.' },
  {
    user_id: 10,
    campsite_id: 62,
    content: 'Suspendisse accumsan tortor quis turpis.',
  },
  {
    user_id: 8,
    campsite_id: 180,
    content: 'Ut at dolor quis odio consequat varius.',
  },
  {
    user_id: 4,
    campsite_id: 150,
    content: 'Quisque id justo sit amet sapien dignissim vestibulum.',
  },
  {
    user_id: 6,
    campsite_id: 568,
    content:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
  },
  {
    user_id: 5,
    campsite_id: 547,
    content: 'Praesent id massa id nisl venenatis lacinia.',
  },
  {
    user_id: 9,
    campsite_id: 167,
    content: 'Morbi vel lectus in quam fringilla rhoncus.',
  },
  {
    user_id: 1,
    campsite_id: 250,
    content:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  },
  {
    user_id: 7,
    campsite_id: 165,
    content: 'Ut tellus. Nulla ut erat id mauris vulputate elementum.',
  },
  {
    user_id: 8,
    campsite_id: 462,
    content: 'Maecenas tincidunt lacus at velit.',
  },
  { user_id: 6, campsite_id: 535, content: 'Proin risus. Praesent lectus.' },
  { user_id: 4, campsite_id: 525, content: 'Donec semper sapien a libero.' },
  { user_id: 10, campsite_id: 254, content: 'Nullam varius. Nulla facilisi.' },
  {
    user_id: 3,
    campsite_id: 50,
    content: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
  },
  { user_id: 6, campsite_id: 293, content: 'Donec semper sapien a libero.' },
  { user_id: 9, campsite_id: 423, content: 'In quis justo.' },
  { user_id: 3, campsite_id: 111, content: 'Cras pellentesque volutpat dui.' },
  { user_id: 4, campsite_id: 317, content: 'Nullam varius. Nulla facilisi.' },
  {
    user_id: 3,
    campsite_id: 267,
    content: 'In quis justo. Maecenas rhoncus aliquam lacus.',
  },
  {
    user_id: 6,
    campsite_id: 469,
    content:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  },
  {
    user_id: 2,
    campsite_id: 274,
    content: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
  },
  {
    user_id: 6,
    campsite_id: 119,
    content: 'Etiam justo. Etiam pretium iaculis justo.',
  },
  { user_id: 2, campsite_id: 417, content: 'Aliquam erat volutpat.' },
  {
    user_id: 3,
    campsite_id: 491,
    content: 'Suspendisse ornare consequat lectus.',
  },
  {
    user_id: 5,
    campsite_id: 197,
    content:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
  },
  { user_id: 5, campsite_id: 35, content: 'Sed accumsan felis.' },
  {
    user_id: 5,
    campsite_id: 395,
    content: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
  },
  {
    user_id: 1,
    campsite_id: 195,
    content:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
  },
  {
    user_id: 10,
    campsite_id: 292,
    content:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
  },
  {
    user_id: 9,
    campsite_id: 442,
    content:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
  },
  { user_id: 5, campsite_id: 362, content: 'Phasellus in felis.' },
  {
    user_id: 1,
    campsite_id: 285,
    content:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  {
    user_id: 7,
    campsite_id: 245,
    content:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  },
  { user_id: 3, campsite_id: 448, content: 'Vivamus tortor.' },
  {
    user_id: 7,
    campsite_id: 451,
    content:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
  },
  {
    user_id: 9,
    campsite_id: 543,
    content:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  },
  {
    user_id: 3,
    campsite_id: 462,
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  },
  {
    user_id: 9,
    campsite_id: 514,
    content: 'Vivamus vel nulla eget eros elementum pellentesque.',
  },
  {
    user_id: 9,
    campsite_id: 86,
    content: 'Etiam faucibus cursus urna. Ut tellus.',
  },
  {
    user_id: 2,
    campsite_id: 286,
    content: 'Phasellus sit amet erat. Nulla tempus.',
  },
  { user_id: 2, campsite_id: 312, content: 'Morbi ut odio.' },
  {
    user_id: 10,
    campsite_id: 260,
    content:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    user_id: 9,
    campsite_id: 450,
    content: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
  },
  {
    user_id: 5,
    campsite_id: 479,
    content:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
  },
  {
    user_id: 7,
    campsite_id: 9,
    content:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
  },
  { user_id: 5, campsite_id: 340, content: 'Nulla ac enim.' },
  {
    user_id: 9,
    campsite_id: 379,
    content: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  },
  { user_id: 5, campsite_id: 200, content: 'Sed accumsan felis.' },
  { user_id: 4, campsite_id: 151, content: 'Fusce consequat. Nulla nisl.' },
  {
    user_id: 10,
    campsite_id: 559,
    content: 'In hac habitasse platea dictumst.',
  },
  {
    user_id: 3,
    campsite_id: 7,
    content:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
  },
  {
    user_id: 4,
    campsite_id: 369,
    content:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    user_id: 10,
    campsite_id: 479,
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    user_id: 2,
    campsite_id: 590,
    content: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
  },
  {
    user_id: 5,
    campsite_id: 342,
    content: 'Duis consequat dui nec nisi volutpat eleifend.',
  },
  { user_id: 1, campsite_id: 172, content: 'Sed sagittis.' },
  {
    user_id: 3,
    campsite_id: 168,
    content:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  },
  { user_id: 4, campsite_id: 580, content: 'Nunc rhoncus dui vel sem.' },
  {
    user_id: 1,
    campsite_id: 22,
    content: 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
  },
  {
    user_id: 2,
    campsite_id: 314,
    content: 'Ut at dolor quis odio consequat varius.',
  },
  { user_id: 4, campsite_id: 236, content: 'Donec posuere metus vitae ipsum.' },
  {
    user_id: 5,
    campsite_id: 361,
    content:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  { user_id: 6, campsite_id: 199, content: 'In blandit ultrices enim.' },
  {
    user_id: 10,
    campsite_id: 123,
    content:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
  },
  {
    user_id: 6,
    campsite_id: 558,
    content: 'Morbi quis tortor id nulla ultrices aliquet.',
  },
  { user_id: 8, campsite_id: 447, content: 'In quis justo.' },
  {
    user_id: 3,
    campsite_id: 79,
    content:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
  },
  {
    user_id: 6,
    campsite_id: 553,
    content: 'Phasellus id sapien in sapien iaculis congue.',
  },
  {
    user_id: 5,
    campsite_id: 187,
    content:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
  },
  {
    user_id: 9,
    campsite_id: 23,
    content: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  },
  { user_id: 10, campsite_id: 540, content: 'Suspendisse potenti.' },
  { user_id: 6, campsite_id: 187, content: 'Cras pellentesque volutpat dui.' },
  { user_id: 4, campsite_id: 69, content: 'Duis ac nibh.' },
  {
    user_id: 5,
    campsite_id: 358,
    content:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
  },
  { user_id: 2, campsite_id: 287, content: 'Aliquam non mauris.' },
  {
    user_id: 5,
    campsite_id: 114,
    content: 'Nullam porttitor lacus at turpis.',
  },
  {
    user_id: 2,
    campsite_id: 491,
    content:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
  },
  {
    user_id: 7,
    campsite_id: 284,
    content: 'Aliquam non mauris. Morbi non lectus.',
  },
  { user_id: 10, campsite_id: 150, content: 'Nulla nisl. Nunc nisl.' },
  { user_id: 5, campsite_id: 416, content: 'Nunc rhoncus dui vel sem.' },
  {
    user_id: 2,
    campsite_id: 537,
    content:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
  },
  { user_id: 7, campsite_id: 372, content: 'Nulla facilisi.' },
  { user_id: 8, campsite_id: 401, content: 'Aliquam erat volutpat.' },
  {
    user_id: 7,
    campsite_id: 85,
    content: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
  },
  { user_id: 2, campsite_id: 89, content: 'In congue. Etiam justo.' },
  {
    user_id: 2,
    campsite_id: 39,
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
  },
  {
    user_id: 6,
    campsite_id: 149,
    content:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
  },
  { user_id: 10, campsite_id: 437, content: 'In congue. Etiam justo.' },
  {
    user_id: 1,
    campsite_id: 100,
    content:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
  },
  { user_id: 2, campsite_id: 523, content: 'Donec posuere metus vitae ipsum.' },
  {
    user_id: 5,
    campsite_id: 201,
    content: 'Vivamus vestibulum sagittis sapien.',
  },
  {
    user_id: 7,
    campsite_id: 529,
    content: 'Suspendisse accumsan tortor quis turpis. Sed ante.',
  },
  {
    user_id: 1,
    campsite_id: 298,
    content:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  },
  {
    user_id: 10,
    campsite_id: 465,
    content:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
  },
  { user_id: 2, campsite_id: 422, content: 'Duis aliquam convallis nunc.' },
  {
    user_id: 3,
    campsite_id: 503,
    content:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
  },
  {
    user_id: 2,
    campsite_id: 231,
    content:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  },
  {
    user_id: 10,
    campsite_id: 418,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
  },
  {
    user_id: 4,
    campsite_id: 596,
    content: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
  },
  { user_id: 1, campsite_id: 223, content: 'Praesent blandit. Nam nulla.' },
  {
    user_id: 4,
    campsite_id: 9,
    content:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  },
  {
    user_id: 9,
    campsite_id: 140,
    content:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
  },
  {
    user_id: 8,
    campsite_id: 257,
    content:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
  },
  {
    user_id: 2,
    campsite_id: 60,
    content: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
  },
  {
    user_id: 4,
    campsite_id: 373,
    content:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
  },
  {
    user_id: 10,
    campsite_id: 221,
    content: 'In hac habitasse platea dictumst.',
  },
  {
    user_id: 1,
    campsite_id: 492,
    content: 'Aliquam erat volutpat. In congue.',
  },
  { user_id: 9, campsite_id: 229, content: 'Suspendisse potenti.' },
  {
    user_id: 9,
    campsite_id: 423,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
  },
  {
    user_id: 1,
    campsite_id: 414,
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    user_id: 1,
    campsite_id: 421,
    content: 'Mauris ullamcorper purus sit amet nulla.',
  },
  { user_id: 2, campsite_id: 297, content: 'Nunc rhoncus dui vel sem.' },
  {
    user_id: 8,
    campsite_id: 504,
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
  },
  {
    user_id: 4,
    campsite_id: 342,
    content:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
  },
  { user_id: 8, campsite_id: 172, content: 'Fusce posuere felis sed lacus.' },
  {
    user_id: 6,
    campsite_id: 515,
    content: 'Cras in purus eu magna vulputate luctus.',
  },
  {
    user_id: 7,
    campsite_id: 168,
    content: 'Integer tincidunt ante vel ipsum.',
  },
  { user_id: 7, campsite_id: 47, content: 'Praesent blandit.' },
  {
    user_id: 4,
    campsite_id: 225,
    content: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    user_id: 7,
    campsite_id: 565,
    content: 'Aenean sit amet justo. Morbi ut odio.',
  },
  { user_id: 1, campsite_id: 333, content: 'Praesent blandit. Nam nulla.' },
  { user_id: 9, campsite_id: 33, content: 'Vivamus tortor.' },
  {
    user_id: 7,
    campsite_id: 113,
    content:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
  },
  {
    user_id: 4,
    campsite_id: 252,
    content:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
  },
  {
    user_id: 1,
    campsite_id: 458,
    content:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
  },
  {
    user_id: 8,
    campsite_id: 60,
    content:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
  },
  { user_id: 3, campsite_id: 221, content: 'In eleifend quam a odio.' },
  {
    user_id: 8,
    campsite_id: 447,
    content: 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
  },
  { user_id: 5, campsite_id: 213, content: 'Fusce posuere felis sed lacus.' },
  { user_id: 9, campsite_id: 9, content: 'Ut tellus.' },
  { user_id: 4, campsite_id: 181, content: 'Nulla suscipit ligula in lacus.' },
  {
    user_id: 10,
    campsite_id: 591,
    content: 'Mauris ullamcorper purus sit amet nulla.',
  },
  {
    user_id: 3,
    campsite_id: 347,
    content:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
  },
  {
    user_id: 6,
    campsite_id: 151,
    content:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
  },
  {
    user_id: 4,
    campsite_id: 303,
    content:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
  },
  {
    user_id: 5,
    campsite_id: 307,
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  { user_id: 2, campsite_id: 446, content: 'Morbi non lectus.' },
  { user_id: 8, campsite_id: 82, content: 'Nulla suscipit ligula in lacus.' },
  {
    user_id: 4,
    campsite_id: 201,
    content: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
  },
  {
    user_id: 8,
    campsite_id: 245,
    content:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
  },
  { user_id: 5, campsite_id: 149, content: 'Nulla tempus.' },
  { user_id: 9, campsite_id: 500, content: 'Nunc rhoncus dui vel sem.' },
  {
    user_id: 3,
    campsite_id: 458,
    content: 'Donec semper sapien a libero. Nam dui.',
  },
  {
    user_id: 9,
    campsite_id: 400,
    content:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
  },
  {
    user_id: 9,
    campsite_id: 184,
    content:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    user_id: 9,
    campsite_id: 473,
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    user_id: 10,
    campsite_id: 305,
    content: 'In hac habitasse platea dictumst.',
  },
  {
    user_id: 9,
    campsite_id: 542,
    content: 'Phasellus in felis. Donec semper sapien a libero.',
  },
  {
    user_id: 2,
    campsite_id: 242,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
  },
  {
    user_id: 2,
    campsite_id: 432,
    content: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
  },
  {
    user_id: 5,
    campsite_id: 87,
    content: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  { user_id: 4, campsite_id: 224, content: 'Aliquam non mauris.' },
  {
    user_id: 3,
    campsite_id: 237,
    content: 'Curabitur in libero ut massa volutpat convallis.',
  },
  { user_id: 4, campsite_id: 518, content: 'Praesent blandit. Nam nulla.' },
  { user_id: 8, campsite_id: 493, content: 'Morbi porttitor lorem id ligula.' },
  { user_id: 2, campsite_id: 93, content: 'Nullam varius. Nulla facilisi.' },
  {
    user_id: 10,
    campsite_id: 57,
    content:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  },
  {
    user_id: 8,
    campsite_id: 283,
    content: 'Ut at dolor quis odio consequat varius.',
  },
  {
    user_id: 9,
    campsite_id: 153,
    content:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
  },
  {
    user_id: 1,
    campsite_id: 279,
    content: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
  },
  { user_id: 3, campsite_id: 472, content: 'Aliquam non mauris.' },
  {
    user_id: 10,
    campsite_id: 409,
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  {
    user_id: 1,
    campsite_id: 332,
    content: 'Aliquam non mauris. Morbi non lectus.',
  },
  {
    user_id: 6,
    campsite_id: 426,
    content: 'Curabitur at ipsum ac tellus semper interdum.',
  },
  { user_id: 9, campsite_id: 384, content: 'Curabitur gravida nisi at nibh.' },
  {
    user_id: 6,
    campsite_id: 179,
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
  },
  {
    user_id: 2,
    campsite_id: 218,
    content:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
  },
  { user_id: 6, campsite_id: 109, content: 'Integer a nibh.' },
  {
    user_id: 7,
    campsite_id: 24,
    content: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  {
    user_id: 5,
    campsite_id: 40,
    content: 'Nullam molestie nibh in lectus. Pellentesque at nulla.',
  },
  {
    user_id: 3,
    campsite_id: 352,
    content:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
  },
  {
    user_id: 2,
    campsite_id: 69,
    content: 'Vivamus vestibulum sagittis sapien.',
  },
  { user_id: 2, campsite_id: 578, content: 'In congue.' },
  {
    user_id: 6,
    campsite_id: 267,
    content:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    user_id: 5,
    campsite_id: 373,
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
  },
  {
    user_id: 3,
    campsite_id: 59,
    content: 'Pellentesque at nulla. Suspendisse potenti.',
  },
  {
    user_id: 7,
    campsite_id: 9,
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
  },
  { user_id: 9, campsite_id: 599, content: 'Fusce consequat. Nulla nisl.' },
  { user_id: 6, campsite_id: 92, content: 'Fusce consequat. Nulla nisl.' },
  {
    user_id: 3,
    campsite_id: 12,
    content: 'Suspendisse potenti. In eleifend quam a odio.',
  },
  { user_id: 8, campsite_id: 74, content: 'Aliquam non mauris.' },
  { user_id: 1, campsite_id: 400, content: 'Suspendisse potenti.' },
  {
    user_id: 10,
    campsite_id: 125,
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    user_id: 2,
    campsite_id: 454,
    content: 'Aliquam erat volutpat. In congue.',
  },
  {
    user_id: 6,
    campsite_id: 385,
    content: 'Nullam porttitor lacus at turpis.',
  },
  { user_id: 4, campsite_id: 225, content: 'Fusce posuere felis sed lacus.' },
  { user_id: 9, campsite_id: 434, content: 'Sed sagittis.' },
  {
    user_id: 3,
    campsite_id: 219,
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  },
  { user_id: 9, campsite_id: 229, content: 'Integer ac neque.' },
  {
    user_id: 8,
    campsite_id: 468,
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
  },
  { user_id: 1, campsite_id: 133, content: 'Sed ante. Vivamus tortor.' },
  {
    user_id: 3,
    campsite_id: 141,
    content: 'Vivamus in felis eu sapien cursus vestibulum.',
  },
  {
    user_id: 4,
    campsite_id: 356,
    content: 'Donec quis orci eget orci vehicula condimentum.',
  },
  {
    user_id: 3,
    campsite_id: 167,
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

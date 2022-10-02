const { Comment } = require('../models');

const commentdata = [
    {
      user_id: 5,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    },
    {
      user_id: 5,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Etiam justo. Etiam pretium iaculis justo.',
    },
    {
      user_id: 4,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Maecenas rhoncus aliquam lacus.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Nulla nisl. Nunc nisl.',
    },
    {
      user_id: 3,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Mauris ullamcorper purus sit amet nulla.',
    },
    {
      user_id: 2,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'In sagittis dui vel nisl. Duis ac nibh.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    {
      user_id: 5,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Maecenas pulvinar lobortis est.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'In hac habitasse platea dictumst.',
    },
    {
      user_id: 6,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Phasellus sit amet erat. Nulla tempus.',
    },
    {
      user_id: 2,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Suspendisse potenti. In eleifend quam a odio.',
    },
    {
      user_id: 7,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    },
    {
      user_id: 3,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Vestibulum sed magna at nunc commodo placerat.',
    },
    {
      user_id: 5,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    {
      user_id: 9,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Duis mattis egestas metus. Aenean fermentum.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    },
    {
      user_id: 1,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    {
      user_id: 1,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Pellentesque eget nunc.',
    },
    {
      user_id: 7,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    },
    {
      user_id: 3,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    },
    {
      user_id: 2,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Nullam molestie nibh in lectus. Pellentesque at nulla.',
    },
    {
      user_id: 9,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Nulla nisl.',
    },
    {
      user_id: 3,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
    },
    {
      user_id: 9,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      user_id: 7,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    },
    {
      user_id: 1,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Maecenas ut massa quis augue luctus tincidunt.',
    },
    {
      user_id: 3,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    {
      user_id: 5,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Aenean fermentum.',
    },
    {
      user_id: 1,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    },
    {
      user_id: 4,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    },
    {
      user_id: 5,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Nulla tellus. In sagittis dui vel nisl.',
    },
    {
      user_id: 9,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    },
    {
      user_id: 10,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    },
    {
      user_id: 7,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Etiam justo.',
    },
    {
      user_id: 8,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Etiam justo. Etiam pretium iaculis justo.',
    },
    {
      user_id: 2,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    },
    {
      user_id: 4,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Aenean sit amet justo.',
    },
    {
      user_id: 2,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Aenean sit amet justo. Morbi ut odio.',
    },
    {
      user_id: 4,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    },
    {
      user_id: 1,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    },
    {
      user_id: 7,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    },
    {
      user_id: 4,
      campsite_id: '34728A7E-796D-4834-949A-4E960CC945C1',
      content: 'Nulla nisl. Nunc nisl.',
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

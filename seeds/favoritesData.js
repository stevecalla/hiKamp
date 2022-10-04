const { Favorite } = require('../models');

const favoritesData2 = [
  {
    user_id: 1,
    campsite_id: '48F2732E-4251-4D81-875C-8E52839620B5',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/309E8537-1DD8-B71B-0BD307081BCD3FDA.jpg',
  },
  {
    user_id: 2,
    campsite_id: '6C955DB8-0800-422C-8198-F6E1DC7BA46C',
    campsite_img_url:
      'https://via.placeholder.com/150/154d07/FFFFFF/?text=Go+Camping!',
  },
  {
    user_id: 3,
    campsite_id: 'A9F2297C-AFF2-48EA-BD2A-2BBE35BDE306',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/1643D87A-F10C-85E3-E8603CB9B30AF975.jpg',
  },
  {
    user_id: 4,
    campsite_id: '48F2732E-4251-4D81-875C-8E52839620B5',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/309E8537-1DD8-B71B-0BD307081BCD3FDA.jpg',
  },
  {
    user_id: 5,
    campsite_id: '6C955DB8-0800-422C-8198-F6E1DC7BA46C',
    campsite_img_url:
      'https://via.placeholder.com/150/154d07/FFFFFF/?text=Go+Camping!',
  },
  {
    user_id: 6,
    campsite_id: 'A9F2297C-AFF2-48EA-BD2A-2BBE35BDE306',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/1643D87A-F10C-85E3-E8603CB9B30AF975.jpg',
  },
  {
    user_id: 7,
    campsite_id: '48F2732E-4251-4D81-875C-8E52839620B5',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/309E8537-1DD8-B71B-0BD307081BCD3FDA.jpg',
  },
  {
    user_id: 8,
    campsite_id: '6C955DB8-0800-422C-8198-F6E1DC7BA46C',
    campsite_img_url:
      'https://via.placeholder.com/150/154d07/FFFFFF/?text=Go+Camping!',
  },
  {
    user_id: 9,
    campsite_id: 'A9F2297C-AFF2-48EA-BD2A-2BBE35BDE306',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/1643D87A-F10C-85E3-E8603CB9B30AF975.jpg"',
  },
  {
    user_id: 10,
    campsite_id: '48F2732E-4251-4D81-875C-8E52839620B5',
    campsite_img_url:
      'https://www.nps.gov/common/uploads/structured_data/309E8537-1DD8-B71B-0BD307081BCD3FDA.jpg',
  },
];

const seedFavorite = () => Favorite.bulkCreate(favoritesData2);

module.exports = seedFavorite;

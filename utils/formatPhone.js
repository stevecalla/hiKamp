const phoneNumberFormatter = require('phone-number-formats');


const formatPhone= (req, res, next) => {
    let phoneFormatted = new phoneNumberFormatter(newPhone).format({type: 'domestic'});
    return phoneFormatted.toString();
  };

  module.exports = formatPhone;
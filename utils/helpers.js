const phoneNumberFormatter = require('phone-number-formats');

format_time = (date) => {
  return date.toLocaleTimeString();
};

format_date = (date) => {
  let dateFormatted = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  
  return dateFormatted.toLocaleDateString();
},

  format_phone = (date) => {
    let phoneFormatted = new phoneNumberFormatter(`3-${date}`).format({type: 'domestic'});
    return phoneFormatted.toString();
};

trim_content = (content) => {
  return content.trim();
};

capitalizeFirstCharacter = (answer) => {
  str = answer.trim();
  str = str.split(" ");
  let isCapitalized = str.map(element => {
    let firstChar = element.charAt(0).toUpperCase();
    let otherChar = element.slice(1, element.length).toLowerCase();
    return `${firstChar}${otherChar}`;
  })
  return isCapitalized.join(' ');
};

capitalizeFirstCharacter('help world');

lowerCase = (answer) => {
  return answer.trim().toLowerCase();
};

isNumber = (answer) => {
  if (!isNaN(answer)) {
    return true;
  }
  return "Please provide a number (with no letters, commas, periods).";
};

isEmail = (answer) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(answer)) {
    return "Please provide a valid email address!";
  }
  return true;
};

isBlank = (answer, name) => {
  if (!answer || answer.trim() === "") {
    return `Please, provide a ${name}.`;
  }
  return true;
};

const blue = `\x1b[36;1m`;
const white = `\u001b[0;1m`;

sortUtility = (listToSort) => {
  let sortedList = listToSort.sort(function (a, b) {
    const nameA = a.toUpperCase(); //ignore upper and lowercase
    const nameB = b.toUpperCase(); //ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    //names must be equal
    return 0;
  });
  return sortedList;
};

module.exports = {
  capitalizeFirstCharacter,
  lowerCase,
  isNumber,
  isEmail,
  isBlank,
  blue,
  white,
  format_time,
  format_date,
  trim_content,
  sortUtility,
  format_phone, 
};

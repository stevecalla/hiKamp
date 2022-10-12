//query selector variables go here 👇
let shareButton = document.getElementById('share-button');
let campName = document.getElementById('camp-name').textContent;
let npsURL = document.getElementById('nps-link').href;
// let campDescription = declared in playDescripton

//global variables go here 👇

//event listeners go here 👇

//functions and event handlers go here 👇

// function for web share api
function webShareAPI(header, description, link) {
  console.log(header, description, link)
  navigator
    .share({
      // title: header,
      text: `${title}\n${description}`,
      url: link,
    })
    .then(() => console.log("Successful share"))
    .catch((error) => console.log("Error sharing", error));
}

if (navigator.share) {
  // Show button if it supports webShareAPI
  shareButton.style.display = "block";
  shareButton.addEventListener("click", () => {
    webShareAPI(campName, campDescription.textContent, npsURL)
  });
} else {
  // Hide button if it doesn't supports webShareAPI
  shareButton.style.display = "none";
  console.error("Your Browser doesn't support Web Share API");
}

// Source:
// https://dev.to/j471n/how-to-share-anything-from-your-website-by-web-share-api-1h5g

// Note: 
// Still doesn't work on Chrome MacOS as of 10/12/22
// As of January 2021, it is available on Safari, Android in Chromium forks, ChromeOS, and Chrome on Windows. Chrome on MacOS is still in development. See MDN for details.


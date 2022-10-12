//query selector variables go here 👇
let shareButton = document.getElementById('share-button');
// let campDescription = declared in playDescripton
let campName = document.getElementById('camp-name');
let npsURL = document.getElementById('nps-link');


// function for web share api
function webShareAPI(header, description, link) {
  console.log(header, description, link)
  navigator
    .share({
      title: header,
      // text: description,
      url: link,
    })
    .then(() => console.log("Successful share"))
    .catch((error) => console.log("Error sharing", error));
}

if (navigator.share) {
  // Show buqtton if it supports webShareAPI
  shareButton.style.display = "block";
  shareButton.addEventListener("click", () => {
    console.log('click');
    alert(campName.textContent, campDescription.textContent, npsURL.href)
    webShareAPI(campName.textContent, campDescription.textContent, npsURL.href)
  });
} else {
  // Hide button if it doesn't supports webShareAPI
  shareButton.style.display = "none";
  console.error("Your Browser doesn't support Web Share API");
}

// Source:
// https://dev.to/j471n/how-to-share-anything-from-your-website-by-web-share-api-1h5g
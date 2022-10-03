//query selector variables go here 👇
// let test = document.getElementById('test-listner');
let favoriteStar = document.querySelector('.star');
let campId = document.getElementById('content-box');
let imgURL = document.getElementById('campsite-photo');

//global variables go here 👇

//event listeners go here 👇
favoriteStar.addEventListener('click', getIDAndImgURL);

//functions and event handlers go here 👇
function getIDAndImgURL() {
  let id = campId.dataset.id;
  let url = campId.dataset.imgurl || 'https://via.placeholder.com/150/154d07/FFFFFF/?text=Go+Camping!';
  
  favoriteStar.checked ? createFavorite(id, url) : deleteFavorite(id, url);

  console.log('click');
  console.log(id, url);
  console.log(favoriteStar.checked)
}

async function createFavorite(id, url) {
  console.log(id, url)

  if (id || url) {
    const response = await fetch("/api/favorite", {
      method: "POST",
      body: JSON.stringify({ id, url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to create favorite.");
    }
  }
}

async function deleteFavorite(id, url) {
  if (id || url) {
    const response = await fetch("/api/favorite", {
      method: "DELETE",
      body: JSON.stringify({ id, url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to create favorite.");
    }
  }
}
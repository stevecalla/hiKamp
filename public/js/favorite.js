//query selector variables go here 👇
// let test = document.getElementById('test-listner');
let favoriteStar = document.querySelector('.star');
let campId = document.getElementById('content-box');
let imgURL = document.getElementById('campsite-photo');

//global variables go here 👇

//event listeners go here 👇
// test.addEventListener('click', () => console.log('click'));
favoriteStar.addEventListener('click', getIDAndImgURL);

//functions and event handlers go here 👇
function getIDAndImgURL() {
  console.log('click');
  let id = campId.dataset.id;
  let url = campId.dataset.imgurl || "";
  console.log(id, url);
  console.log(favoriteStar.checked)
  favoriteStar.checked ? createFavorite(id, url) : deleteFavorite(id, url);
  window.location.reload();
}

async function createFavorite(id, url) {
  console.log(id, url)

  if (id && url) {
    const response = await fetch("/api/favorite", {
      method: "POST",
      body: JSON.stringify({ id, url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/user-posts");
      //render new favorite in the aide
    } else {
      alert("Failed to create favorite.");
    }
  }
}

async function deleteFavorite(id, url) {
  if (id && url) {
    const response = await fetch("/api/favorite", {
      method: "DELETE",
      body: JSON.stringify({ id, url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/user-posts");
      //render new favorite in the aide
    } else {
      alert("Failed to create favorite.");
    }
  }
}
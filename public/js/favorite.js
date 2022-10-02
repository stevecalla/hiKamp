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
  let url = imgURL.getAttribute('src');
  console.log(id, url);
  createFavorite(id, url);
}

async function createFavorite(id, url) {
  if (id && url) {
    // const response = await fetch("/create-favorite", {
    const response = await fetch("/api/favorite", {
      method: "POST",
      body: JSON.stringify({ id, url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/user-posts");
      //render new favorite in the aide
    } else {
      alert("Failed to create favorite.");
    }
  }
}

const createPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch("/create-post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/user-posts");
    } else {
      alert("Failed to log in.");
    }
  }
};
//query selector variables go here 👇
let searchInput = document.getElementById('search-input'); //USED FOR AUTOCOMPLETE & SEARCH BAR RESULTS
let searchIcon = document.getElementById('search-icon');
let trashIcon = document.getElementById('trash-icon');

//global variables go here 👇

//event listeners go here 👇
window.addEventListener('resize', adjustZoomOnResize);
searchInput.addEventListener('keypress', renderSearchInputMap);
searchIcon.addEventListener('click', renderSearchInputMap);
trashIcon.addEventListener('click', () => {
  //if search click on trash icon, hide trash icon, show search icon
  searchInput.value = "";
  searchIcon.classList.remove('hide');
  trashIcon.classList.remove('show');
  trashIcon.classList.add('hide');

})
searchInput.addEventListener('input', () => searchAutoComplete());
// searchInput.addEventListener("input", () => console.log(searchInput.value));

//functions and event handlers go here 👇
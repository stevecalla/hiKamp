//query selector variables go here 👇
let openCloseDetails = document.getElementById('favorite-box');

//global variables go here 👇

//event listeners go here 👇
window.addEventListener('resize', openClose);

//functions and event handlers go here 👇
// AS WINDOW RESIZES, OPEN DETAILS IF INNERWIDTH < 1300, CLOSE IF LESS THAN 1300
function openClose() {
  if (window.innerWidth >= 1300) {
    console.log('open details');
    openCloseDetails.setAttribute('open', 'true');
  } else {
    console.log('close details');
    openCloseDetails.removeAttribute('open');
  }
}

// ON WINDOW LOAD, IF INNERWIDTH >= 1300, CLOSE DETAILS ELEMENT OTHERWISE OPDEN DETAILS ELEMENT
window.onload = () => {
 openClose();
};

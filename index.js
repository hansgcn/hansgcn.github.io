//Modal Content Div
const modalDiv = document.querySelector('.modal-content');

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', buttonClick);
span.addEventListener('click', spanClose );
window.addEventListener('click', windowClose);

// When the user clicks the button, open the modal 
function buttonClick () {
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
function spanClose() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


function windowClose (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

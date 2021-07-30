const menuToggle = document.getElementById('toggle')
const showcase = document.querySelector('.showcase');

const inputs = document.querySelectorAll(".input");
const close = document.getElementById('close');
const menuBar =document.getElementById("menu");

//function to open menu bar
menuToggle.addEventListener('click', () => {
    menuBar.style.display = 'flex';
    menuToggle.style.display = 'none';
});
// function to close menu bar
close.addEventListener('click',() =>{
  menuBar.style.display = "none";
  menuToggle.style.display ="flex";
});

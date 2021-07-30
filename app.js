const menuToggle = document.getElementById('toggle')
const showcase = document.querySelector('.showcase');

const inputs = document.querySelectorAll(".input");
const close = document.getElementById('close');
const menuBar =document.getElementById("menu");
menuToggle.addEventListener('click', () => {
    menuBar.style.display = 'flex';
    menuToggle.style.display = 'none';
});
close.addEventListener('click',() =>{
  menuBar.style.display = "none";
  menuToggle.style.display ="flex";
});
/*function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
*/  

'use strict';

const btnScroll = document.querySelector('.btn-scroll');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
}


btnScroll.addEventListener('click',() =>{
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} )

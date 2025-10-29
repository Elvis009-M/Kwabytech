
const body = document.querySelector('body') ;
const button = document.querySelector('#mode-switch'); 



/*  -----   CODE FOR DAY/NIGHT MODE    -----   */

button.addEventListener('click', () => {
 
 modeSwitch() ;
})
/*
function mode () {
 let option = this.classList
  if(option == 'day' ) {
    body.backgroundColor = 'red' ;
  }
  if(option == 'night' ) {
    body.backgroundColor = 'red' ;
  }
}
*/

const modeSwitch = () => {
  if(button.classList == 'day' ) {
    body.style.backgroundColor = 'white' ;
    body.style.color = 'black' ;
    button.classList.remove('day') ;
    button.classList.add('night') ;
    button.style.animation = 'go 1s 1s 2' ;
  }
  else if(button.classList == 'night' ) {
    body.style.backgroundColor = 'black' ;
    body.style.color = 'white' ;
    button.classList.remove('night') ;
    button.classList.add('day') ;
    button.style.animation = 'go 1s 1s 2' ;
  }
 button.style.animation = `go 1s ease-out 1s ` ;
}

document.querySelector('.redirect-to-contact').addEventListener("click", () => window.location = "mailto:kwabytech@gmail.com")

document.querySelector('#show-hide').addEventListener("click", () => {document.querySelector('#projects-container-display').classList.toggle('hide'); })

document.querySelector('#contact-button').addEventListener("click", () => window.location = "index.html")


  const navBtn = document.querySelector('.layer') ;
  const nav = document.querySelector('.navlinks') ;
  const navLinks = document.querySelectorAll('.navlinks li , .navlinks p') ;


/* CODE FOR NAVIGATION BAR IN DEVICES WITH SMALL WIDTH AS USED IN THE MEDIA QUERY   */
const navSlide = () => {


  navBtn.addEventListener('click', () => {
    nav.classList.toggle('navlinks-active');
  navLinks.forEach((link, index) =>{
    if(link.style.animation) {
        link.style.animation = '' ;
    }
    else {
    link.style.animation=`navFade 0.5s ease forwards ${index/7+0.5}s`;
    }
    })
    navBtn.classList.toggle('toggle') ;
  });


}

navSlide();


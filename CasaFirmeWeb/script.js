/*const menuToggle = document.querySelector('.toggle');
const menuNav = document.querySelector('.menunav');

function toggleMenu(){

    menuToggle.classList.toggle('active');
    menuNav.classList.toggle('active');
    menuNav.style.opacity = '1';
}

function hiddeMenu(){
    menuNav.style.opacity = '0';
}
*/


function toggleMenu(){

    const menuToggle = document.querySelector('.toggle');
    const menuNav = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');


    menuToggle.classList.toggle('active');
    menuNav.classList.toggle('active');
    logo.classList.toggle('active');
}
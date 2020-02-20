var navOpen = document.querySelector('#openbtn');
var navClose = document.querySelector('#closebtn');

navOpen.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);

function openNav() {
    document.getElementById('mob__nav').style.width = '100%';
}

function closeNav() {
    document.getElementById('mob__nav').style.width = '0';
}

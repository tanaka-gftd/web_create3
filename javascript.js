'use strict';

let btnToggle = document.getElementById('btn'),
    navList = document.getElementById('nav-list');

function hamburgerClick() {
            btnToggle.classList.toggle("close");
            navList.classList.toggle("open");
};

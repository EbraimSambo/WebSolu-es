let navbar = document.querySelector("nav");
let btn = document.querySelector(".icones-mobile");
btn.addEventListener('click', ()=>{ 
    navbar.classList.toggle('active');
    document.querySelector('#menu').classList.toggle('fa-times');
});



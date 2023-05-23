var backdrop = document.querySelector('.backdrop');
var continued = document.querySelector('.continue');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noBtn = document.querySelector('.no');
var yesBtn = document.querySelector('.yes');
var toggleBtn = document.querySelector('.toggle-btn');
var mobileNav = document.querySelector('.mobile-nav');
var mobileNavBtn = document.querySelector('.mobile-nav__item--cta');
for(var i = 0;i< selectPlanButtons.length;i++){
    selectPlanButtons[i].addEventListener('click', function(){
        continued.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener("click",closeBackdrop);

noBtn.onclick = closeBackdrop;
// yesBtn.onclick = "../start-hosting/index.html";

function closeBackdrop(){
    backdrop.style.display = 'none';
    continued.style.display = 'none';
    mobileNav.style.display = "none";
}

toggleBtn.onclick = mobileNavbar;

function mobileNavbar(){
    backdrop.style.display = 'block';
    mobileNav.style.display = "block";
}

mobileNavBtn.onclick = closeBackdrop;

// function closeMobileNavbar(){
//     mobileNav.style.display = "none"; 
//     continued.style.display = 'block';
//     backdrop.style.display = 'block'; 
// }


let oldBTN = null;

function btn(BTNid) {
    let newBTN = document.getElementById(BTNid);

    if (oldBTN && newBTN !== oldBTN) {
        oldBTN.style.color = "white";
    }

    newBTN.style.color = "red";
    oldBTN = newBTN; 
}
function toggleSideNav() {
    var sideNav = document.querySelector('.sideNav');
    sideNav.classList.toggle('hidden');

    var butn = document.querySelector('.BTNnav');
    butn.classList.toggle('visible');
}

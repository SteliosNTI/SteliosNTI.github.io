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
    const sideNav = document.querySelector('.sideNav');
    sideNav.classList.toggle('hidden');

    const butn = document.querySelector('.BTNnav');
    butn.classList.toggle('visible');
}

document.getElementById("form").onsubmit = function(){
    event.preventDefault(); 
   
    let inputs = document.getElementById("text").value.toLowerCase();

   if (inputs == 'natalie'){
    for (let i = 0; i < 3; i++) {
     window.open("/hemlig.html")
    }
   }
}

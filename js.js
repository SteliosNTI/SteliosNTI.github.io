let oldBTN = null;

function btn(BTNid) {
    let newBTN = document.getElementById(BTNid);
    
    // Check if this is the first button clicked or if it's a different button
    if (oldBTN && newBTN !== oldBTN) {
        oldBTN.style.color = "white"; // Revert color of the previously clicked button
    }

    newBTN.style.color = "red"; // Change color of the currently clicked button
    oldBTN = newBTN; // Update the old button reference
}

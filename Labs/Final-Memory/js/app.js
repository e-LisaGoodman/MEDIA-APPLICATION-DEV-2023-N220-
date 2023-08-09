//Memory

//A 4x4 grid of facedown cards (in HTML)
let revealedCard = 0;
let activeCard = null;
let awaitEndOfMove = false;
let i = 0

//flip cards
for (i = 0; i<2; i++){
        //Reveal the value of a facedown card on click
    function itsClicked(event){
    //card looks different to show flipped over
    event.target.className = "faceUp";
    //makes card say word
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = "\n\n\n" + response;
    event.target.innerHTML.right = "20px";

    //If two revealed cards match, remove them
    if (awaitEndOfMove){
        return;
    }
    if (!activeCard){
        activeCard = i;
        i++;
        if(activeCard == 2){
            awaitEndOfMove = true
        }
        return;
    }
    //Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
    setTimeout(()=>{
        revealedCard = i;
        activeCard = i;
        i++
    }, 2000)
    }
}

//If two revealed cards do not match, return them to face down

//A ‘replay game’ option when the game is over

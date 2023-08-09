const cardsContainer = document.querySelector(".cards");
const colors = ["#009933", "#0099ff", "#ff99ff", "#ff3399", "#66ff99", "#ff9900", "#00ccff", "#9900cc"];
const colorsPicklist = [...colors, ...colors];
const cardCount = colorsPicklist.length;

// Global Variables
let revealedCount = 0;
let activeCard = null;
let awaitingEndOfMove = false;

//Flip two cards for one turn
function buildCard(color) {
	const element = document.createElement("div");
	//Set up face up style
	element.classList.add("card");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");
	//Upon click
	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");
		//Test if end of move
		if (awaitingEndOfMove
			|| revealed === "true"
			|| element == activeCard) {
			return;
		}

		// Reveal this color 
		element.style.backgroundColor = color;
        
		if (!activeCard) {
			activeCard = element;

			return;
		}
		//Test if the two cards match
		const colorToMatch = activeCard.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeCard.setAttribute("data-revealed", "true");

			activeCard = null;
			awaitingEndOfMove = false;
			revealedCount += 2;
			//End of game message upon all matches revealed
			if (revealedCount === cardCount) {
				alert("You win! Refresh to start again.");
			}

			return;
		}
		//When two cards have been clicked
		awaitingEndOfMove = true;
		//Turn cards back over after 2 seconds
		setTimeout(() => {
			activeCard.style.backgroundColor = null;
			element.style.backgroundColor = null;

			awaitingEndOfMove = false;
			activeCard = null;
		}, 2000);
	});

	return element;
}

// Create card sets
for (let i = 0; i < cardCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const card = buildCard(color);

	colorsPicklist.splice(randomIndex, 1);
	cardsContainer.appendChild(card);
}
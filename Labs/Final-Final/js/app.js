const cardsContainer = document.querySelector(".cards");
const colors = ["#009933", "#ff99ff", "#ff3399", "#66ff99", "#ff9900", "#00ccff", "#9900cc", "ffff00"];
const colorsPicklist = [...colors, ...colors];
const cardCount = colorsPicklist.length;

// Global Variables
let revealedCount = 0;
let activeCard = null;
let awaitingEndOfMove = false;

//flip two cards for one turn
function buildCard(color) {
	const element = document.createElement("div");

	element.classList.add("card");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");

		if (awaitingEndOfMove
			|| revealed === "true"
			|| element == activeCard)
			{
			return;
		}

		// Reveal this color
		element.style.backgroundColor = color;
        

		if (!activeCard) {
			activeCard = element;

			return;
		}

		const colorToMatch = activeCard.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeCard.setAttribute("data-revealed", "true");

			activeCard = null;
			awaitingEndOfMove = false;
			revealedCount += 2;

			if (revealedCount === cardCount) {
				alert("You win! Refresh to start again.");
			}

			return;
		}

		awaitingEndOfMove = true;

		setTimeout(() => {
			activeCard.style.backgroundColor = null;
			element.style.backgroundColor = null;

			awaitingEndOfMove = false;
			activeCard = null;
		}, 2000);
	});

	return element;
}

// Lay out cards
for (let i = 0; i < cardCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const card = buildCard(color);

	colorsPicklist.splice(randomIndex, 1);
	cardsContainer.appendChild(card);
}
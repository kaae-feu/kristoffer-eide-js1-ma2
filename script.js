// question 1

let button1 = document.querySelector("#bg");

button1.addEventListener("click", function() {
	document.body.style.backgroundColor = "green";
});

// question 2

const div = document.querySelector(".togglee");

const button2 = document.querySelector(".toggler");

function changeClass() {
	div.classList.toggle("activateClass");
}

// question 3

const dropdown = document.querySelector("select");
const paragraphContainer = document.querySelector(".paragraphs-container");

function addParagraph() {
	console.log(event.target.value);

	const numberOfParagraphs = event.target.value;

	for (let i = 1; i <= numberOfParagraphs; i++) {
		paragraphContainer.innerHTML += `<p class="content"</p>`;
	}
}

dropdown.addEventListener("change", addParagraph);

// question 4

const input = document.querySelector("input[type=text]");
const output = document.querySelector(".char-count");

input.onkeyup = function() {
	console.log(event);
	console.log("value", input.value);
};

const trimmedValue = value.trim();
const charCount = trimmedValue.length;

// question 5

function addClassHighlightWhenScroll() {
	console.log(window.scrollY);
	const scrolled = window.scrollY;

	if (scrolled >= 35) {
		document.body.classList.add("highlight");
	} else {
		document.body.classList.remove("highlight");
	}
}

window.addEventListener("scroll", addClassHighlightWhenScroll);


const homeButton = document.getElementById("homeButton");
const membersButton = document.getElementById("membersButton");
const socialButton = document.getElementById("socialButton")
const rushButton = document.getElementById("rushButton")

const homeDiv = document.getElementById("writeUp");
const membersDiv = document.getElementById("members");
const socialDiv = document.getElementById("info");
const rushDiv = document.getElementById("rush");

function reset()
{

}

homeButton.onclick = function () {
	homeDiv.style.display = "block";
	membersDiv.style.display = "none";
	socialDiv.style.display = "none";
	rushDiv.style.display = "none";
	console.log("CLICKED HOME/RESET BUTTON");
}

membersButton.onclick = function () {
	homeDiv.style.display = "none";
	membersDiv.style.display = "block";
	socialDiv.style.display = "none";
	rushDiv.style.display = "none";
	console.log("CLICKED MEMBERS BUTTON");
}

socialButton.onclick = function () {
	homeDiv.style.display = "none";
	membersDiv.style.display = "none";
	socialDiv.style.display = "block";
	rushDiv.style.display = "none";
	console.log("CLICKED SOCIAL BUTTON");
}

rushButton.onclick = function () {
	homeDiv.style.display = "none";
	membersDiv.style.display = "none";
	socialDiv.style.display = "none";
	rushDiv.style.display = "block";
	console.log("CLICKED RUSH BUTTON");
}


main = function () {
	const house = document.getElementById("houseButton");
	const info = document.getElementById("infoButton");
	const members = document.getElementById("memberButton");
};

main();

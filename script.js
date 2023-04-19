// Code for dynamically loading content based on navigation bar clicks
const contentDiv = document.getElementById("content");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
	link.addEventListener("click", e => {
		e.preventDefault();
		const page = link.getAttribute("href").substr(1) + ".html";

		fetch(page)
			.then(response => response.text())
			.then(html

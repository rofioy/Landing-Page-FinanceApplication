const navbarItems = document.querySelectorAll("nav ul li a");

// Add event listener to each navbar item
navbarItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the href attribute of the clicked item
    const href = item.getAttribute("href");

    // Get the element with the corresponding id
    const section = document.querySelector(href);

    // Scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  });
});

const menu = document.querySelector(".icon-bars");
const navList = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".icon2-bars");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navList.classList.add("active");
    closeMenu.classList.add("active");
    // closeMenu.classList.remove("active");
})

closeMenu.addEventListener("click", () => {
    closeMenu.classList.remove("active");
    navList.classList.remove("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navList.classList.remove("active");
}))


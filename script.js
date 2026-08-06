const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const homeNews = document.getElementById("home-news-list");

if (homeNews) {
    createNewsCards("home-news-list", 2);
}

const newsList = document.getElementById("news-list");

if (newsList) {
    createNewsCards("news-list");
}
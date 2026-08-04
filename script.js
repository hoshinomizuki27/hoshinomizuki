const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Home
createNewsCards("home-news-list", 2);

// NEWSページ
createNewsCards("news-list");
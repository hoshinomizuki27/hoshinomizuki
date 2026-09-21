function createNewsCards(containerId, maxItems = null) {

    const container = document.getElementById(containerId);

    // 要素がなければ何もしない
    if (!container) return;

    // 表示件数を決める
    const items = maxItems
        ? newsData.slice(0, maxItems)
        : newsData;

    items.forEach(news => {

        const card = document.createElement("a");
        card.className = "news-card";
        card.href = news.url;

        card.innerHTML = `
            <span class="date">${news.date}</span>
            <h3>${news.title}</h3>
            <p>${news.summary}</p>
        `;

        container.appendChild(card);

    });

}
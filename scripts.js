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
            screenshots: ["g1s1.jpg", "g1s2.jpg"],
            downloadUrl: "https://www.mediafire.com/file/8s6cnpf3uyi7ij3/7l_forzah5_setup.exe/file"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get("game");
    const game = games[gameKey];

    if (game) {
        // Set the first ad page URL with downloadUrl as a query parameter
        const downloadLink = document.getElementById("download-link");
        if (downloadLink) {
            const adPageUrl = `ad-page1.html?downloadUrl=${encodeURIComponent(game.downloadUrl)}`;
            downloadLink.href = adPageUrl;
        }
    }
});

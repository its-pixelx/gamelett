document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const downloadUrl = urlParams.get("downloadUrl");
    const nextPageLink = document.getElementById("next-page");

    const nextPageUrl = `ad-page2.html?downloadUrl=${encodeURIComponent(downloadUrl)}`;
    nextPageLink.href = nextPageUrl;

    setTimeout(() => {
        window.location.href = nextPageUrl;
    }, 5000);
});

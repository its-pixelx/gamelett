document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const downloadUrl = urlParams.get("downloadUrl");
    const nextPageLink = document.getElementById("next-page");

    const downloadPageUrl = `download.html?downloadUrl=${encodeURIComponent(downloadUrl)}`;
    nextPageLink.href = downloadPageUrl;

    setTimeout(() => {
        window.location.href = downloadPageUrl;
    }, 5000);
});

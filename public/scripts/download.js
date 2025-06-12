document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const downloadUrl = urlParams.get("downloadUrl");
    const downloadLink = document.getElementById("download-link");

    if (downloadUrl && downloadLink) {
        downloadLink.href = downloadUrl;
    }
});

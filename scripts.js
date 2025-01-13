// Search functionality
document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const games = document.querySelectorAll('.game-item');

    games.forEach(game => {
        const gameName = game.getAttribute('data-name').toLowerCase();
        if (gameName.includes(query)) {
            game.style.display = 'block'; // Show matching games
        } else {
            game.style.display = 'none'; // Hide non-matching games
        }
    });
});
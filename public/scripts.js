document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const gameItems = document.querySelectorAll('.game-item');
    const resultsText = document.getElementById('results-text'); // Text element to show the results count

    // Expand search bar on click
    searchBar.addEventListener('click', (event) => {
        searchBar.classList.add('expanded');
        searchInput.focus();
        event.stopPropagation(); // Prevent triggering collapse when clicking inside
    });

    // Prevent collapse when clicking the filter dropdown
    categoryFilter.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent collapse on dropdown click
    });

    // Collapse search bar when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target)) {
            searchBar.classList.remove('expanded');
        }
    });

    // Filter games based on search input and category
    function filterGames() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value.toLowerCase();
        let visibleCount = 0; // To count visible games

        gameItems.forEach(game => {
            const gameName = game.getAttribute('data-name').toLowerCase();
            const gameCategory = game.getAttribute('data-category') 
                ? game.getAttribute('data-category').toLowerCase().split(' ') // Split categories by space
                : [];

            const matchesSearch = gameName.includes(searchQuery);
            const matchesCategory = selectedCategory === "" || gameCategory.includes(selectedCategory); // Check if the selected category is one of the categories

            if (matchesSearch && matchesCategory) {
                game.style.display = 'block';
                visibleCount++; // Increment count if the game is visible
            } else {
                game.style.display = 'none';
            }
        });

        // Show the number of games found
        if (resultsText) {
            resultsText.textContent = `${visibleCount} game${visibleCount !== 1 ? 's' : ''} found`; // Pluralize based on count
            if (visibleCount > 0) {
                resultsText.classList.add('visible'); // Make visible if games are found
            } else {
                resultsText.classList.remove('visible'); // Hide if no games are found
            }
        }

        console.log(`Visible Games: ${visibleCount}`); // Debugging
    }

    searchInput.addEventListener('input', filterGames);
    categoryFilter.addEventListener('change', filterGames);

    // Call the filter on page load to handle initial state
    filterGames();
});

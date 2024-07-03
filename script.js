// Function to fetch and parse the JSON data
function fetchJSONData() {
    fetch('teams.json')
        .then(response => response.json())
        .then(data => {
            window.statsData = data; // Store fetched data in window.statsData
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display stats data
function showStats(linkId) {
    const stats = window.statsData[linkId];
    const statsElement = document.getElementById('stats');

    if (stats) {
        statsElement.innerHTML = `
            <div class="team-info">
                <h2>${stats["Team Name"]}</h2>
                <p>Manager: ${stats.Manager}</p>
                <p>Home Ground: ${stats["Home Ground"]}</p>
                <p>Debut Season: ${stats["Debut Season"]}</p>
                <p>League: ${stats.League}</p>
                <p>Total Matches: ${stats["Total Matches"]}</p>
                <p>Total League Points: ${stats["Total League Points"]}</p>
                <p>Wins: ${stats.Wins}</p>
                <p>Draws: ${stats.Draws}</p>
                <p>Losses: ${stats.Losses}</p>
                <p>Total Match Points: ${stats["Total Match Points"]}</p>
                <p>Average Points per week: ${stats["Average Points per week"]}</p>
            </div>
            <div class="team-emblem">
                <img src="${stats.Emblem}" alt="${stats["Team Name"]} Emblem">
            </div>
        `;
    } else {
        statsElement.innerHTML = `<p>No data available.</p>`;
    }
}


// Fetch the JSON data when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchJSONData();
});

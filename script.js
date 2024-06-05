const statsData = {
    team1: {
        title: 'Goblins FC',
        data: 'Some interesting data for link 1...'
    },
    team2: {
        title: 'Stats for Link 2',
        data: 'Some interesting data for link 2...'
    },
    team3: {
        title: 'Stats for Link 3',
        data: 'Some interesting data for link 3...'
    },
    team4: {
        title: 'Stats for Link 1',
        data: 'Some interesting data for link 1...'
    },
    team5: {
        title: 'Stats for Link 2',
        data: 'Some interesting data for link 2...'
    },
    team6: {
        title: 'Stats for Link 3',
        data: 'Some interesting data for link 3...'
    },
    team7: {
        title: 'Stats for Link 1',
        data: 'Some interesting data for link 1...'
    },
    team8: {
        title: 'Stats for Link 2',
        data: 'Some interesting data for link 2...'
    },
    team9: {
        title: 'Stats for Link 3',
        data: 'Some interesting data for link 3...'
    },
    team10: {
        title: 'Stats for Link 1',
        data: 'Some interesting data for link 1...'
    },
    team11: {
        title: 'Stats for Link 2',
        data: 'Some interesting data for link 2...'
    },
    team12: {
        title: 'Stats for Link 3',
        data: 'Some interesting data for link 3...'
    }
};

function showStats(linkId) {
    const stats = statsData[linkId];
    if (stats) {
        document.getElementById('stats').innerHTML = `<h2>${stats.title}</h2><p>${stats.data}</p>`;
    } else {
        document.getElementById('stats').innerHTML = `<p>No data available</p>`;
    }
}

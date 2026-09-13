// This is your data array. Add more songs up to #50 following this template format!
const songData = [
    {
        rank: 1,
        title: "Ghost VIP",
        mod: "Vs. Camellia",
        charter: "Camellia",
        youtube: "https://youtube.com", // Swap with a legitimate clear link
        victors: ["PlayerOne", "RhythmGod"]
    },
    {
        rank: 2,
        title: "Expurgation",
        mod: "Vs. Tricky",
        charter: "Banbuds",
        youtube: "https://youtube.com",
        victors: ["GamerX"]
    }
];

const listPanel = document.getElementById('listPanel');
const inspectorDefault = document.getElementById('inspectorDefault');
const inspectorContent = document.getElementById('inspectorContent');

// Render the Left-hand list
songData.forEach(song => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `
        <div class="rank">#${song.rank}</div>
        <div class="song-info">
            <h3>${song.title}</h3>
            <p>${song.mod}</p>
        </div>
    `;
    div.addEventListener('click', () => loadSong(song));
    listPanel.appendChild(div);
});

// Update the Inspector Panel on click
function loadSong(song) {
    inspectorDefault.style.display = 'none';
    inspectorContent.style.display = 'block';
    
    document.getElementById('songTitle').innerText = `#${song.rank} - ${song.title}`;
    document.getElementById('songMod').innerText = song.mod;
    document.getElementById('songCharter').innerText = song.charter;
    document.getElementById('verificationLink').href = song.youtube;
    
    const victorList = document.getElementById('victorList');
    victorList.innerHTML = '';
    
    if (song.victors.length === 0) {
        victorList.innerHTML = '<li>No public records submitted yet.</li>';
    } else {
        song.victors.forEach(victor => {
            const li = document.createElement('li');
            li.innerText = victor;
            victorList.appendChild(li);
        });
    }
}

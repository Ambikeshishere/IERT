let currentIndex = 0;
const profiles = document.querySelectorAll('.profile-card');

function showProfile(index) {
    profiles.forEach((profile, idx) => {
        if (idx === index) {
            profile.classList.add('active');
        } else {
            profile.classList.remove('active');
        }
    });
}

// Function to search and display a profile by name
function searchProfile(name) {
    const nameLower = name.toLowerCase();
    for (let i = 0; i < profiles.length; i++) {
        const profileName = profiles[i].querySelector('h2').innerText.toLowerCase();
        if (profileName.includes(nameLower)) {
            currentIndex = i; // Set the current index to the matched profile
            showProfile(currentIndex);
            break;
        }
    }
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % profiles.length;
    showProfile(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    showProfile(currentIndex);
});

// Event listener for the search bar
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) {
        searchProfile(query);
    }
});

// Initialize the view by showing the first card
showProfile(currentIndex);

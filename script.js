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

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % profiles.length;
    showProfile(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    showProfile(currentIndex);
});

// Initialize the view by showing the first card
showProfile(currentIndex);

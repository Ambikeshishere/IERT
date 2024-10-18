const profiles = [
    {
        name: "Toni",
        description: "Loves coding and coffee.",
        image: "https://via.placeholder.com/300/ff7f7f/ffffff?text=Toni",
    },
    {
        name: "Adam",
        description: "Avid traveler and photographer.",
        image: "https://via.placeholder.com/300/7f7fff/ffffff?text=Adam",
    },
    {
        name: "Eve",
        description: "Passionate about art and design.",
        image: "https://via.placeholder.com/300/ff7fff/ffffff?text=Eve",
    },
    {
        name: "Horsa",
        description: "Fitness enthusiast and cook.",
        image: "https://via.placeholder.com/300/ffff7f/ffffff?text=Horsa",
    },
    {
        name: "Abhay",
        description: "Tech lover and gamer.",
        image: "https://via.placeholder.com/300/7fff7f/ffffff?text=Abhay",
    },
];

let currentIndex = 0;

// Show profile based on index
function showProfile(index) {
    const profileCard = document.getElementById('profile-card');
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    
    name.textContent = profiles[index].name;
    description.textContent = profiles[index].description;
    profileCard.querySelector('img').src = profiles[index].image;
}

// Event listeners for buttons
document.getElementById('previous').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length; // Move to the previous profile
    showProfile(currentIndex);
});

document.getElementById('next').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % profiles.length; // Move to the next profile
    showProfile(currentIndex);
});

// Show the first profile initially
showProfile(currentIndex);

// Add event listeners to sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const index = parseInt(this.getAttribute('data-index'));
        currentIndex = index;
        showProfile(currentIndex);
    });
});

// Toggle sidebar visibility
const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('visible');
});

// Hide sidebar when clicking outside of it
document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
        sidebar.classList.remove('visible');
    }
});

let currentIndex = 0;

const profiles = [
    {
        name: "Toni",
        info: "Loves programming and gaming.",
        image: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Toni"
    },
    {
        name: "Adam",
        info: "Avid traveler and photographer.",
        image: "https://via.placeholder.com/300/33FF57/FFFFFF?text=Adam"
    },
    {
        name: "Eve",
        info: "Enjoys painting and drawing.",
        image: "https://via.placeholder.com/300/3357FF/FFFFFF?text=Eve"
    },
    {
        name: "Horsa",
        info: "Fascinated by science and technology.",
        image: "https://via.placeholder.com/300/FF33A1/FFFFFF?text=Horsa"
    },
    {
        name: "Abhay",
        info: "Loves reading and writing.",
        image: "https://via.placeholder.com/300/FFAA33/FFFFFF?text=Abhay"
    }
];

function showProfile(index) {
    const profile = profiles[index];
    document.getElementById("profileName").innerText = profile.name;
    document.getElementById("profileInfo").innerText = profile.info;
    document.getElementById("profileImage").src = profile.image;
    currentIndex = index;
}

function nextProfile() {
    currentIndex = (currentIndex + 1) % profiles.length;
    showProfile(currentIndex);
}

function prevProfile() {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    showProfile(currentIndex);
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("visible");
}

// Show the first profile initially
showProfile(currentIndex);

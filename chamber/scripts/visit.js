const visitOverlay = document.querySelector('#visitOverlay');
const message = document.querySelector('#message');
const closeBtn = document.querySelector('#closeBtn');

const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
const msCalculate = 1000 * 60 * 60 * 24;

let visitMessage = "";

if (!lastVisit) {
    visitMessage = "Welcome! Let us know if you have any questions.";
} else {
    const daysSince = Math.floor((now - lastVisit) / msCalculate);
    if (daysSince < 1) {
        visitMessage = "Back so soon! Awesome!";
    } else {
        visitMessage = `You last visited ${daysSince} days ago.`;
    }
}

message.textContent = visitMessage;
localStorage.setItem('lastVisit', now);

visitOverlay.classList.add('show');

closeBtn.addEventListener('click', () => {
    visitOverlay.classList.remove('show');
});
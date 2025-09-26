document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cards .card");

    if (window.matchMedia("(max-width: 900px)").matches) {
        // Small screens → animate on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // only once
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => observer.observe(card));
    } else {
        // Large screens → animate immediately
        cards.forEach(card => card.classList.add("animate"));
    }
});

const url = "data/portfolio.json";
const spotlightSection = document.querySelector("#spotlight-cards");

async function getPortfolioData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch portfolio data");

        const data = await response.json();
        displayDesigns(data.projects);
    } catch (error) {
        console.error(error);
        spotlightSection.innerHTML = "<p>Sorry, we couldn't load the designs.</p>";
    }
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayDesigns(designs) {
    spotlightSection.innerHTML = "";

    const spotlightDesigns = shuffle(designs).slice(0, 6);

    spotlightDesigns.forEach(design => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <a href="portfolio.html" class="spotlight-link">
                <picture class="spotlight-logo">
                    <source srcset="${design.image}" media="(max-width: 400px)">
                    <img src="${design.image}" alt="${design.client} logo">
                </picture>
                <h3>${design.title}</h3>
                <p><strong>${design.client}</strong></p>
            </a>
        `;


        spotlightSection.appendChild(card);
    });
}

getPortfolioData();

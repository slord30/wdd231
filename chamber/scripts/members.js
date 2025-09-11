const url = "https://slord30.github.io/wdd231/chamber/data/members.json";
const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();

    displayCompanies(data.companies);   
}

const displayCompanies = (companies) => {
    membersContainer.innerHTML = ""; //clear old content


    companies.forEach(company => {

        //create a section card
        let card = document.createElement("section")
        card.classList.add("member-card");//creating a class name to the <section> element for css. ie <section class ="member-card"></section>

        card.innerHTML = `
            <h2>${company.name}</h2>
            <img src="images/${company.image}" alt="logo of ${company.name}" loading="lazy" width="200" height="200">
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><a href="${company.website}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${company.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
};

//Toggle between the different views
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getCompanyData();
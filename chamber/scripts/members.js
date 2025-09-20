const url = "data/members.json";
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

        // build the card content
        card.innerHTML = `
            <img src="images/${company.imageSmall}" alt="${company.name} logo">
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p><a href="${company.website}" target="_blank">Visit Website</a></p>
        `;

        // assemble card
        // card.appendChild(picture);
        // card.appendChild(info);

        // prepend picture to the top of the card
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



// const url = "data/members.json";
// const membersContainer = document.querySelector("#members");
// const gridBtn = document.querySelector("#grid-btn");
// const listBtn = document.querySelector("#list-btn");

// async function getCompanyData() {
//     const response = await fetch(url);
//     const data = await response.json();

//     displayCompanies(data.companies);   
// }

// const displayCompanies = (companies) => {
//     membersContainer.innerHTML = ""; //clear old content


//     companies.forEach(company => {

//         //create a section card
//         let card = document.createElement("section")
//         card.classList.add("member-card");//creating a class name to the <section> element for css. ie <section class ="member-card"></section>

//         // create <picture> for responsive images
//         const picture = document.createElement("picture");

//         // large screen 
//         const sourceLarge = document.createElement("source");
//         sourceLarge.setAttribute("media", "(min-width: 1024px)");
//         sourceLarge.setAttribute("srcset", company.imageLarge);

//         // small screen
//         const img = document.createElement("img");
//         img.setAttribute("src", company.imageSmall);
//         img.setAttribute("alt", `Logo of ${company.name}`);
//         img.setAttribute("loading", "lazy");
//         img.setAttribute("width", "100");
//         img.setAttribute("height", "100");

//         // append sources and img to picture
//         picture.appendChild(sourceLarge);
//         picture.appendChild(img);

//         // build the card content
//         card.innerHTML = `
//             <h3>${company.name}</h3>
//             <p>${company.address}</p>
//             <p>${company.phone}</p>
//             <p><a href="${company.website}" target="_blank">Visit Website</a></p>
//         `;

//         // assemble card
//         // card.appendChild(picture);
//         // card.appendChild(info);

//         // prepend picture to the top of the card
//         membersContainer.appendChild(card);
//     });
// };

// //Toggle between the different views
// gridBtn.addEventListener("click", () => {
//     membersContainer.classList.add("grid");
//     membersContainer.classList.remove("list");
// });

// listBtn.addEventListener("click", () => {
//     membersContainer.classList.add("list");
//     membersContainer.classList.remove("grid");
// });

// getCompanyData();
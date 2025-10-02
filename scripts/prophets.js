const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';


const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); //request
    const data = await response.json(); //parse the JSON data (the prophet data)
    //console.table(data.prophets); //check that data
    displayProphets(data.prophets);

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //create elments to add to the div.cards element

        //create section card
        let card = document.createElement('section');

        //create h2 element for full name
        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //create p element for date of birth text
        let birthDateText = document.createElement('p');
        birthDateText.textContent = "Date of Birth:";

        //create p element for date of birth
        let birthDate = document.createElement('p');
        birthDate.textContent = `${prophet.birthdate}`;

        //create p element for place of birth
        let birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //create img element for portrait
        let portrait = document.createElement('img');

     
        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} {prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append the section(card) wit the created elements
        card.appendChild(fullName);
        card.appendChild(birthDateText);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

    getProphetData();





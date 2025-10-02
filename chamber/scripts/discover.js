import {places} from '../data/discover.mjs'

const cards = document.querySelector('#cards');

function displayInfo(info) {
    info.forEach((place) => {
        let card = document.createElement('section');

        let name = document.createElement('h2');
        name.textContent = place.name;

        let figure = document.createElement('figure');
        let image = document.createElement('img');
        image.setAttribute('src', `images/${place.imageurl}`);
        image.setAttribute('alt', `Picture of ${place.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('decoding', 'async');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');
        figure.appendChild(image);

        let address = document.createElement('address');
        address.textContent = place.address;

        let description = document.createElement('p');
        description.textContent = place.description;

        let button = document.createElement('button');
        button.textContent = "Learn More";

        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cards.appendChild(card);
    });
}

displayInfo(places);


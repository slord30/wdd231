//
//    Toggle Mobile Navigation

export function initNav() {
    // Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
    const navigation = document.querySelector('.navigation');
    const hamButton = document.querySelector('#menu');

    // Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open')
        hamButton.classList.toggle('open');
    });
}

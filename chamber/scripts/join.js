const infoLinks = document.querySelectorAll('.info-link'); //grab all the a href in the membership cards so when they click it the dialog box will open up

// loop through each link grabbing the element id by it's name from the dialog id
infoLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const level = link.dataset.level
        const dialog = document.getElementById(`dialog${level}`);
        if (dialog) dialog.showModal();
    });
});


// close buttons inside the modals. calling "closest" object because we are using a href and not button
const closeBtns = document.querySelectorAll('.closeBtn');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const dialog = btn.closest('dialog'); // find parent dialog
        if (dialog) dialog.close();
    });
});






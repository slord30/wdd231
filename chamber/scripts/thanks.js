// const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);

// console.log(myInfo.get('firstName'));
// console.log(myInfo.get('lastName'));
// console.log(myInfo.get('orgTitle'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('organization'));
// console.log(myInfo.get('membershipLevel'));
// console.log(myInfo.get('orgDescription'));

// document.querySelector('#details').innerHTML = `
// <p><strong>Name: </strong>${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
// <p><strong>Email Address: </strong>${myInfo.get('email')}</p>
// <p><strong>Phone Number: </strong>${myInfo.get('phone')}</p>
// <p><strong>Business/Organization Name: </strong>${myInfo.get('organization')}</p>
// <p><strong>Membership Level: </strong>${myInfo.get('membershipLevel')}</p>
// <hr>
// <p><strong>Submitted On: </strong>${myInfo.get('timestamp')}</p>
// `;

// thankyou.js
window.addEventListener("DOMContentLoaded", () => {
    const myInfo = new URLSearchParams(window.location.search);

    const detailsDiv = document.querySelector("#details");
    if (!detailsDiv) return;

    detailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
        <p><strong>Email Address:</strong> ${myInfo.get('email')}</p>
        <p><strong>Phone Number:</strong> ${myInfo.get('phone')}</p>
        <p><strong>Business/Organization Name:</strong> ${myInfo.get('organization')}</p>
        <p><strong>Membership Level:</strong> ${myInfo.get('membershipLevel')}</p>
        <p id='date'><strong>Submitted On:</strong> ${new Date().toLocaleString()}</p>
    `;
});

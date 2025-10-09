const quoteInfo = new URLSearchParams(window.location.search);

// Get values from URL
const firstName = quoteInfo.get('firstName');
const lastName = quoteInfo.get('lastName');
const email = quoteInfo.get('email');
const projectType = quoteInfo.get('project-type');
const pages = quoteInfo.get('pages');
const design = quoteInfo.get('design');
const features = quoteInfo.getAll('features');
const maintenance = quoteInfo.getAll('maintenance');
const comments = quoteInfo.get('comments');

// Optional: log to check
console.log({firstName, lastName, email, projectType, pages, design, features, maintenance, comments});

// Display in the page
document.querySelector('#result').innerHTML = `
    <p><strong>Name: </strong>${firstName} ${lastName}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Project Type: </strong>${projectType}</p>
    <p><strong>Number of Pages: </strong>${pages}</p>
    <p><strong>Design Complexity: </strong>${design}</p>
    <p><strong>Additional Features: </strong>${features.join(', ')}</p>
    <p><strong>Hosting & Maintenance: </strong>${maintenance.join(', ')}</p>
    <p><strong>Comments: </strong>${comments}</p>
`;

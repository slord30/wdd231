export function initQuoteResults() {
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

    // Price map
    const prices = {
        pages: {
            "1-5 ($500)": 500,
            "6-8 ($1,000)": 1000,
            "9-10+ ($2,000)": 2000
        },
        design: {
            "Basic (Template-based) ($300)": 300,
            "Standard (Custom UI) ($600)": 600,
            "Advanced (Fully Custom, Animations) ($1,200)": 1200
        },
        features: {
            "Blog Integration ($300)": 300,
            "E-commerce Functionality ($800)": 800,
            "Custom Forms ($200)": 200
        },
        maintenance: {
            "Hosting Setup ($100)": 100,
            "Maintenance ($50/hour)": 50,
            "Existing Website Modifications/Facelift ($75/hour)": 75
        }
    };

    // Calculate total
    let total = 0;
    total += prices.pages[pages] || 0;
    total += prices.design[design] || 0;
    features.forEach(f => total += prices.features[f] || 0);
    maintenance.forEach(m => total += prices.maintenance[m] || 0);

    // Optional: log to check
    console.log({ firstName, lastName, email, projectType, pages, design, features, maintenance, comments, total });

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
        <p id="total"><strong>Total Estimate: </strong>$${total.toLocaleString()}</p>
    `;
}

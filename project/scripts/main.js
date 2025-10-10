// main.js
import { initNav } from './nav.js';
import { initFooter } from './footer.js';
import { initSpotlight } from './spotlight.js';
import { initPortfolio } from './portfolio.js';
import { initQuoteResults } from './quote-results.js';

// Initialize common scripts
initNav();
initFooter();

// Page-specific scripts
if (document.querySelector("#spotlight-cards")) {
  initSpotlight();
}

if (document.querySelector(".portfolio-container")) {
  initPortfolio();
}

if (document.querySelector("#result")) {
  initQuoteResults();
}

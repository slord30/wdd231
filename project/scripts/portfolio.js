export function initPortfolio() {
  const url = 'data/portfolio.json';

  // Select your container inside <main>
  const container = document.querySelector(".portfolio-container");

  // Select your existing modal elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");
  const closeBtn = modal.querySelector(".close");

  async function loadPortfolio() {
    try {
      // Fetch your JSON data
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch project data");

      const data = await response.json();
      const projects = data.projects;

      // Clear “Loading...” message
      container.innerHTML = "";

      // Loop through projects and create thumbnails
      projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="thumbnail">
        <h3>${project.title}</h3>
        <p><strong>Client:</strong> ${project.client}</p>
        <p><strong>Category:</strong> ${project.category}</p>
        <p>${project.description}</p>
      `;

        container.appendChild(card);

        // When thumbnail is clicked, open modal
        const img = card.querySelector("img");
        img.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImg.src = project.image;
          caption.textContent = project.title;
        });
      });
    } catch (error) {
      console.error(error);
      container.innerHTML =
        "<p>Sorry, something went wrong loading the portfolio.</p>";
    }
  }

  // Load portfolio
  loadPortfolio();

  // Close modal when clicking X or outside
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}
export function initFooter() {
    const d = new Date();
    document.getElementById("currentYear").innerHTML = `&copy; ${d.getFullYear()}`;
    document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
}

document.addEventListener("DOMContentLoaded", (event) => {

    const menuButton = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const searchInput = document.getElementById('search');
    const listItems = document.querySelectorAll('#linkList li');

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
    searchInput.addEventListener("input", function () {
        const filter = this.value.toLowerCase();
        listItems.forEach(item => {
            const text = item.querySelector("a").textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });
})
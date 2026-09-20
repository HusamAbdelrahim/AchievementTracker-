const searchBox = document.querySelector('#Ach-search');
const cards = document.querySelectorAll('.achievement');

searchBox.addEventListener('input', () => {
    const term = searchBox.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();

        if (title.includes(term)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
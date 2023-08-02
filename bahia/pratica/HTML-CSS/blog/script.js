
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const article = button.parentElement;
            const excerpt = article.querySelector('.excerpt');
            const fullText = article.querySelector('.full-text');

            if (excerpt.classList.contains('hidden')) {
                excerpt.classList.remove('hidden');
                fullText.classList.add('hidden');
                button.textContent = 'Ler Mais';
            } else {
                excerpt.classList.add('hidden');
                fullText.classList.remove('hidden');
                button.textContent = 'Ler Menos';
            }
        });
    });

// подключение JSON

fetch('js/menuCard.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки');
        }
        return response.json();
    })
    .then(data => {
        renderCards(data, 'cardsContainer');
        console.log('Данные загружены:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('cardsContainer').innerHTML =
            '<p>Произошла ошибка при загрузке проектов</p>';

            
    });
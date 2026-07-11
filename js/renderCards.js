function renderCards(data, containerId) {

    const cardsContainer = document.getElementById("cardsContainer");

    let htmlString = '';

    data.cardsContainer.forEach(card => {
        htmlString += ` <article class="coffee__card">
                <div class="coffee-card__image">
                    <img class="card__img" src="${card.image}" alt="${card.title}">
                </div>
                <h3 class="coffe__heading">${card.title}</h3>
                <div class="card__block">
                    <div class="card__ingrediens">
                        <h4 class="card__subtitle">${card.subtitle}</h4>
                        <ul class="card__list">
                        ${card.item.map(item => `<li class="card__item">${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="card__price">
                        <data class="price__value">${card.price}</data>
                        <span class="price__currency">₽</span>
                    </div>
                </div>    
            </article>`
    });

    cardsContainer.innerHTML = htmlString;
}
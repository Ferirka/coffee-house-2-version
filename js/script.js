console.log('🔼 Скрипт кнопки "Наверх" загружен');

function createScrollTopBtn() {
    const button = document.createElement('button');  // Создание элемента
    button.classList.add("buttonScroll");
    button.className = 'scroll-to-top';
    button.title = 'Наверх';
}

let block = document.getElementById('buttonScroll');   
let switc = document.createElement('button')

function injectScrollButtonStyles() {
    const styles = ` 
    <style>
    /* Стили для кнопки "Наверх" */
    .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 50px;
    width: 50px;
    background: #4e483e;
    color: white;
    border:none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0, 0.2)
    transition: all 0.3s ease;
    z-index: 1000;
    }

    </style>
    `;

     document.head.insertAdjacentHTML('beforeend', styles);
}

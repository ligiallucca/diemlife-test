const itemsList = document.getElementsByClassName('main__items');

let counters = {
    mental: 0,
    physical:  0,
    social: 0,
    environmental: 0,
    occupational: 0,
    financial: 0
};

function updateCounters(category) {
    const counter = document.getElementById(`counter-${category}`);
    counter.innerHTML = counters[category];

    if(counters[category] > 0 && counter.classList.length === 1) {
        counter.classList.add('header__nav-counter--non-zero');
    }
}

function createList(totalItems, category, taskText) {

    for(let i = 0; i < totalItems; i++) {
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        icon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${category}`);

        const questIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        questIcon.classList.add('quest__icon');
        questIcon.appendChild(icon);

        const iconCircle = document.createElement('span');
        iconCircle.classList.add('quest__icon-circle');
        iconCircle.appendChild(questIcon); 
        
        const questTitle = document.createElement('strong');
        questTitle.classList.add('quest__title');
        questTitle.innerText = taskText;

        const questButton = document.createElement('button');
        questButton.classList.add('quest__join', 'main__button');
        questButton.innerText = 'Join it'
        questButton.addEventListener('click', () => {
            counters[category]++;
            questButton.disabled = true;
            article.classList.add('quest--joined')
            questButton.innerText = 'Joined';
            updateCounters(category);
        });
        const article = document.createElement('article');
        article.classList.add('quest');
        article.appendChild(iconCircle);
        article.appendChild(questTitle);
        article.appendChild(questButton);
        const newItem = document.createElement('li');
        newItem.classList.add('main__item');
        newItem.appendChild(article);
        itemsList[0].appendChild(newItem);
    }
}

updateCounters('physical');
updateCounters('mental');
updateCounters('social');
updateCounters('environmental');
updateCounters('occupational');
updateCounters('financial');

createList(1, 'physical', 'Climb a mountain');
createList(20, 'physical', 'Lorem ipsum');
createList(1, 'environmental', 'Plant a tree');
createList(22, 'environmental', 'Lorem ipsum');
createList(1, 'financial', `Save a $1'000'000`);
createList(10, 'financial', 'Lorem ipsum dolor sit amet consectetur');
createList(15, 'mental', 'Lorem ipsum dolor sit');
createList(17, 'social', 'Lorem ipsum dolor');
createList(13, 'occupational', 'Lorem ipsum dolor sit amet');






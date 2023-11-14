import clearData from './clearData';
import ourStory from './ourStory.js';

export default function menu() {
    clearData();

    const main = document.getElementById('main');
    const title = document.createElement('h1');
    main.appendChild(title);
    title.textContent = "Our Menu";
    title.style.textAlign = "center";
    title.style.color = "white";
    title.style.backgroundColor = "#1F305E";
    title.style.fontSize = "50px";
    title.style.padding = "40px 0px";

    const container = document.createElement('div');
    container.id = "container";
    main.appendChild(container);
    container.style.backgroundColor = "#1F305E";
    container.style.height = "100vh";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "20px";
    container.style.justifyContent = "start";
    container.style.padding = "30px 0px";

    const titleBox = document.createElement('div');
    title.appendChild(titleBox);
    titleBox.style.display = "flex";
    titleBox.style.flexDirection = "row";
    titleBox.style.justifyContent = "center";
    titleBox.style.gap = "30px";
    titleBox.style.paddingTop = "10px";
    const foodLink = document.createElement('a');
    foodLink.href = "#";
    titleBox.appendChild(foodLink);
    foodLink.id = "foodLink";
    foodLink.style.textDecoration = "underline";
    foodLink.textContent = "Food";
    foodLink.style.color = "white";
    foodLink.style.fontSize = "25px";

    const drinkLink = document.createElement('a');
    drinkLink.href = "#";
    titleBox.appendChild(drinkLink);
    drinkLink.id = "drinkLink";
    drinkLink.style.textDecoration = "underline";
    drinkLink.textContent = "Drinks";
    drinkLink.style.color = "white";
    drinkLink.style.fontSize = "25px";

    function drinks() {

        const drink = document.createElement('div');
        const container = document.getElementById('container').appendChild(drink);
        drink.setAttribute('id', 'drinks');
        drink.style.display = "flex";
        drink.style.flexDirection = "column";
        drink.style.justifyContent = "start";
        drink.style.margin = "0 auto";
        drink.style.gap = "5px";
        const title = document.createElement('h1');
        drink.appendChild(title);
        title.textContent = "Wine";
        title.style.color = "white";
        title.style.textAlign = "center";
    
        const wineOption = document.createElement('h2');
        drink.appendChild(wineOption);
        wineOption.textContent = "Wine Option";
        wineOption.style.color = "white";
        wineOption.style.textAlign = "center";
    
        const description = document.createElement('p');
        drink.appendChild(description);
        description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
        description.style.color = "white";
        description.style.textAlign = "center";
    
        const price = document.createElement('p');
        drink.appendChild(price);
        price.textContent = "$10";
        price.style.color = "white";
        price.style.textAlign = "center";
    }

    function tapas() {
        const tapas = document.createElement('div');
        const container = document.getElementById('container').appendChild(tapas);
        tapas.setAttribute('id', 'tapas');
        tapas.style.display = "flex";
        tapas.style.flexDirection = "column";
        tapas.style.justifyContent = "start";
        tapas.style.margin = "0 auto";
        tapas.style.gap = "5px";
        const title = document.createElement('h1');
        tapas.appendChild(title);
        title.textContent = "Tapas";
        title.style.color = "white";
        title.style.textAlign = "center";
    
        const tapasOption = document.createElement('h2');
        tapas.appendChild(tapasOption);
        tapasOption.textContent = "Tapas Option";
        tapasOption.style.color = "white";
        tapasOption.style.textAlign = "center";
    
        const description = document.createElement('p');
        tapas.appendChild(description);
        description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
        description.style.color = "white";
        description.style.textAlign = "center";
    
        const price = document.createElement('p');
        tapas.appendChild(price);
        price.textContent = "$12";
        price.style.color = "white";
        price.style.textAlign = "center";
    }

    loadTapas();

    function loadTapas() {
        for (let i = 0; i < 5; i++) {
            tapas();
        }}

        function loadDrinks() {
            for (let i = 0; i < 5; i++) {
                drinks();
            }
        }

    document.getElementById('foodLink').addEventListener('click', function() {
        document.getElementById('container').innerHTML = "";
       loadTapas();
    })

    document.getElementById('drinkLink').addEventListener('click', function() {
        document.getElementById('container').innerHTML = "";
       loadDrinks();
    })

    document.getElementsByClassName('linksNames')[0].addEventListener('click', function() {
        ourStory();
    })
}

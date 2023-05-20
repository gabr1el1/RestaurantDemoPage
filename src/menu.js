import tacosBistec from './images/menu/tacos-bistec.jpg';
import tacosChorizo from './images/menu/tacos-chorizo.jpg';
import tacosLengua from './images/menu/tacos-lengua.jpg';
import tacosPastor from './images/menu/tacos-pastor.jpg';
import tacosSuadero from './images/menu/tacos-suadero.jpg';
import horchata from './images/menu/horchata.jpg';
import jamaica from './images/menu/jamaica.jpg';
import arrozConLeche from './images/menu/arroz-con-leche.jpg';
import jericalla from './images/menu/jericalla.jpg';
import './styles.css';
function menuComponent(){
    const main = document.querySelector("main");
    main.innerHTML = "";

    const menuComponent = document.createElement("div");
    menuComponent.classList.add("menu");
    
    const tacosList = [
    {"name":"Tacos de Bistec","price":1.0,"imageURL":tacosBistec},
    {"name":"Tacos de Chorizo","price":1.0,"imageURL":tacosChorizo},
    {"name":"Tacos de Lengua","price":1.5,"imageURL":tacosLengua},
    {"name":"Tacos de Pastor","price":1.5,"imageURL":tacosPastor},
    {"name":"Tacos de Suadero","price":0.9,"imageURL":tacosSuadero}
    ];
    
    const drinksList = [
    {"name":"Agua de horchata","price":2.0,"imageURL":horchata},
    {"name":"Agua de jamaica","price":1.8,"imageURL":jamaica}
    ];

    const dessertsList = [
    {"name":"Arroz con leche","price":1.0,"imageURL":arrozConLeche},
    {"name":"Jericalla","price":0.7,"imageURL":jericalla}
    ]

    
    const tacos = document.createElement("div");
    const drinks = document.createElement("div");
    const desserts = document.createElement("div");
    
    const tacosTitle = document.createElement("h1");
    tacosTitle.innerText = "Tacos";
    const drinksTitle = document.createElement("h1");
    drinksTitle.innerText = "Drinks";
    const dessertsTitle = document.createElement("h1");
    dessertsTitle.innerText = "Desserts"

    tacos.appendChild(tacosTitle);
    drinks.appendChild(drinksTitle);
    desserts.appendChild(dessertsTitle);

    loadToCategory(tacos, tacosList);
    loadToCategory(drinks,drinksList);
    loadToCategory(desserts, dessertsList);

    menuComponent.appendChild(tacos);
    menuComponent.appendChild(drinks);
    menuComponent.appendChild(desserts);


    main.appendChild(menuComponent);
}

function loadToCategory(category, listItems){
    listItems.forEach(element => {
        const item = document.createElement("div");
        const html = 
        `<div><h2>${element.name}</h2></div>
        <div><img src=${element.imageURL}></div>
        <div> <p>$${element.price}</p></div>`;
        item.innerHTML = html;
        item.classList.add("item-menu");
        category.appendChild(item);
    });
}




export {menuComponent}

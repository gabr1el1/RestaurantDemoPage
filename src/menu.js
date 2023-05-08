function menuComponent(){
    const main = document.querySelector("main");
    const menuComponent = document.createElement("div");
    menuComponent.classList.add("menu");
    menuComponent.innerText = "Menu!";

    main.innerHTML = menuComponent.innerHTML;
}

export {menuComponent}

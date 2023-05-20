function initialSetUp(){
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const listHeader = document.createElement("ul");
    const itemMenu = document.createElement("li");
    const itemLogo = document.createElement("li");
    const itemAbout = document.createElement("li");
    const linkMenu = document.createElement("a");
    linkMenu.setAttribute("id","linkMenu");
    const headingMenu = document.createElement("h1");
    const linkAbout = document.createElement("a");
    linkAbout.setAttribute("id","linkAbout");
    const info = document.createElement("main");
    const footer = document.createElement("footer");

    header.appendChild(listHeader);
    listHeader.appendChild(itemMenu);
    listHeader.appendChild(itemLogo);
    listHeader.appendChild(itemAbout);
    itemMenu.appendChild(linkMenu);
    itemLogo.appendChild(headingMenu);
    itemAbout.appendChild(linkAbout);

    linkMenu.innerText = "Menu";
    headingMenu.innerText = "Tacos";
    linkAbout.innerText = "About";
    footer.innerHTML = "<span>Hi there, Made by GBRLHZ(gabr1el1)</span><a href='https://github.com/gabr1el1'><i class='fa-brands fa-github'></i></a>"

    content.appendChild(header);
    content.appendChild(info);
    content.appendChild(footer);
}

export {initialSetUp};
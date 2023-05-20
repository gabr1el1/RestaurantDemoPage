import './styles.css';
function aboutComponent(){

    const main = document.querySelector("main");
    main.innerHTML = "";

    const aboutComponent = document.createElement("div");
    aboutComponent.classList.add("about");
    
    let mapa = document.createElement("div");
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14952.751013518327!2d-103.43752041284174!3d20.45748030000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f51975154be2b%3A0xa4b5aff12a03c2b6!2sTacos%20Arandas!5e0!3m2!1ses-419!2smx!4v1683561986971!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapa = mapa.firstElementChild;
    const infoSection = document.createElement("div");
    const copy = document.createElement("div");
    const titleCopy = document.createElement("h1");
    titleCopy.innerText = "Who are we?";
    const paragCopy = document.createElement("p");
    paragCopy.innerText = `
    Welcome to our tacos restaurant, 
    
    Our tacos are a true work of art, made with your choice of juicy meat or fresh vegetables, and topped with a variety of flavorful and colorful toppings. From the classic carne asada to the spicy and tangy al pastor, our tacos are sure to satisfy your cravings and leave you wanting more.
    
    Come visit us today and experience the joy of authentic Mexican cuisine. Our friendly staff is ready to welcome you with open arms and show you what makes our restaurant so wonderful. We can't wait to serve you!`;
    const contact = document.createElement("div");
    const contactTitle = document.createElement("h1");
    contactTitle.innerText = "Contact Us";
    const socials = document.createElement("ul");
    socials.classList.add("socials");
    

    const twitter = document.createElement("li");
    twitter.innerHTML = "<a href='#'><i class='fa-brands fa-twitter fa-xl'></i></a>";

    const facebook = document.createElement("li");
    facebook.innerHTML = "<a href='#'><i class='fa-brands fa-facebook fa-xl'></i></a>";
    

    const tiktok = document.createElement("li");
    tiktok.innerHTML = "<a href='#'><i class='fa-brands fa-tiktok fa-xl'></i></a>";

    const youtube = document.createElement("li");
    youtube.innerHTML = "<a href='#'><i class='fa-brands fa-youtube fa-xl'></i></a>";

    const whatsapp = document.createElement("li");
    whatsapp.innerHTML = "<a href='#'><i class='fa-brands fa-whatsapp fa-xl'></i></a>";


    socials.appendChild(twitter);
    socials.appendChild(facebook);
    socials.appendChild(tiktok);
    socials.appendChild(youtube);
    socials.appendChild(whatsapp);


    copy.appendChild(titleCopy);
    copy.appendChild(paragCopy);
    contact.appendChild(contactTitle);
    contact.appendChild(socials);
    infoSection.appendChild(copy);
    infoSection.appendChild(contact);
    infoSection.classList.add("info");
    aboutComponent.appendChild(mapa);
    aboutComponent.appendChild(infoSection);
    main.appendChild(aboutComponent);
}

export {aboutComponent};
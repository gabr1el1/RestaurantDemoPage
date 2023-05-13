/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutComponent": () => (/* binding */ aboutComponent)
/* harmony export */ });
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/facebook.svg */ "./src/images/facebook.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_youtube_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/youtube.svg */ "./src/images/youtube.svg");
/* harmony import */ var _images_tiktok_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/tiktok.svg */ "./src/images/tiktok.svg");




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
    contactTitle.innerText = "Contac Us";
    const socials = document.createElement("ul");
    socials.classList.add("socials");
    const facebook = document.createElement("li");
    const facebookIcon = new Image();
    facebookIcon.src = _images_facebook_svg__WEBPACK_IMPORTED_MODULE_0__;
    facebook.appendChild(facebookIcon);
    socials.appendChild(facebook);

    const twitter = document.createElement("li");
    const twitterIcon = new Image();
    twitterIcon.src = _images_twitter_svg__WEBPACK_IMPORTED_MODULE_1__;
    twitter.appendChild(twitterIcon);
    socials.appendChild(twitter);

    const youtube = document.createElement("li");
    const youtubeIcon = new Image();
    youtubeIcon.src = _images_youtube_svg__WEBPACK_IMPORTED_MODULE_2__;
    youtube.appendChild(youtubeIcon);
    socials.appendChild(youtube);

    const tiktok = document.createElement("li");
    const tiktokIcon = new Image();
    tiktokIcon.src = _images_tiktok_svg__WEBPACK_IMPORTED_MODULE_3__;
    tiktok.appendChild(tiktokIcon);
    socials.appendChild(tiktok);

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



/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialSetUp": () => (/* binding */ initialSetUp)
/* harmony export */ });
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
    footer.innerText = "Hi there! Made by GBRLHZ(gabr1el1)"

    content.appendChild(header);
    content.appendChild(info);
    content.appendChild(footer);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuComponent": () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _images_menu_tacos_bistec_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/tacos-bistec.jpg */ "./src/images/menu/tacos-bistec.jpg");
/* harmony import */ var _images_menu_tacos_chorizo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/tacos-chorizo.jpg */ "./src/images/menu/tacos-chorizo.jpg");
/* harmony import */ var _images_menu_tacos_lengua_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/tacos-lengua.jpg */ "./src/images/menu/tacos-lengua.jpg");
/* harmony import */ var _images_menu_tacos_pastor_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/tacos-pastor.jpg */ "./src/images/menu/tacos-pastor.jpg");
/* harmony import */ var _images_menu_tacos_suadero_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/tacos-suadero.jpg */ "./src/images/menu/tacos-suadero.jpg");
/* harmony import */ var _images_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu/horchata.jpg */ "./src/images/menu/horchata.jpg");
/* harmony import */ var _images_menu_jamaica_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu/jamaica.jpg */ "./src/images/menu/jamaica.jpg");
/* harmony import */ var _images_menu_arroz_con_leche_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu/arroz-con-leche.jpg */ "./src/images/menu/arroz-con-leche.jpg");
/* harmony import */ var _images_menu_jericalla_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/menu/jericalla.jpg */ "./src/images/menu/jericalla.jpg");










function menuComponent(){
    const main = document.querySelector("main");
    main.innerHTML = "";

    const menuComponent = document.createElement("div");
    menuComponent.classList.add("menu");
    
    const tacosList = [
    {"name":"Tacos de Bistec","price":1.0,"imageURL":_images_menu_tacos_bistec_jpg__WEBPACK_IMPORTED_MODULE_0__},
    {"name":"Tacos de Chorizo","price":1.0,"imageURL":_images_menu_tacos_chorizo_jpg__WEBPACK_IMPORTED_MODULE_1__},
    {"name":"Tacos de Lengua","price":1.5,"imageURL":_images_menu_tacos_lengua_jpg__WEBPACK_IMPORTED_MODULE_2__},
    {"name":"Tacos de Pastor","price":1.5,"imageURL":_images_menu_tacos_pastor_jpg__WEBPACK_IMPORTED_MODULE_3__},
    {"name":"Tacos de Suadero","price":0.9,"imageURL":_images_menu_tacos_suadero_jpg__WEBPACK_IMPORTED_MODULE_4__}
    ];
    
    const drinksList = [
    {"name":"Agua de horchata","price":2.0,"imageURL":_images_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_5__},
    {"name":"Agua de jamaica","price":1.8,"imageURL":_images_menu_jamaica_jpg__WEBPACK_IMPORTED_MODULE_6__}
    ];

    const dessertsList = [
    {"name":"Arroz con leche","price":1.0,"imageURL":_images_menu_arroz_con_leche_jpg__WEBPACK_IMPORTED_MODULE_7__},
    {"name":"Jericalla","price":0.7,"imageURL":_images_menu_jericalla_jpg__WEBPACK_IMPORTED_MODULE_8__}
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
        `<h2>${element.name}</h2>
        <img src=${element.imageURL}>
        <p>$${element.price}</p>`;
        item.innerHTML = html;
        item.classList.add("item-menu");
        category.appendChild(item);
    });
}







/***/ }),

/***/ "./src/images/facebook.svg":
/*!*********************************!*\
  !*** ./src/images/facebook.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0e6c35f87cabc4c3d01.svg";

/***/ }),

/***/ "./src/images/menu/arroz-con-leche.jpg":
/*!*********************************************!*\
  !*** ./src/images/menu/arroz-con-leche.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "862298fb55324b1f4015.jpg";

/***/ }),

/***/ "./src/images/menu/horchata.jpg":
/*!**************************************!*\
  !*** ./src/images/menu/horchata.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6960044e3ab40eca2faa.jpg";

/***/ }),

/***/ "./src/images/menu/jamaica.jpg":
/*!*************************************!*\
  !*** ./src/images/menu/jamaica.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "316f9300545b07738893.jpg";

/***/ }),

/***/ "./src/images/menu/jericalla.jpg":
/*!***************************************!*\
  !*** ./src/images/menu/jericalla.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d65e431af7783a14b061.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-bistec.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/tacos-bistec.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "101592e908be2a1e245c.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-chorizo.jpg":
/*!*******************************************!*\
  !*** ./src/images/menu/tacos-chorizo.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a414624c059297b2bf8.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-lengua.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/tacos-lengua.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5ae65e538e35ad71583.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-pastor.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/tacos-pastor.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9b83975089a46a0f1c.jpg";

/***/ }),

/***/ "./src/images/menu/tacos-suadero.jpg":
/*!*******************************************!*\
  !*** ./src/images/menu/tacos-suadero.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37002053b3daa3b19d6c.jpg";

/***/ }),

/***/ "./src/images/tiktok.svg":
/*!*******************************!*\
  !*** ./src/images/tiktok.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55632982d6ba945f34f5.svg";

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0407223bb7bca83e1349.svg";

/***/ }),

/***/ "./src/images/youtube.svg":
/*!********************************!*\
  !*** ./src/images/youtube.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03ce3320ff936a5602d0.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
//console.log("hol ");




(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.initialSetUp)();
document.querySelector("#linkMenu").addEventListener("click",_menu__WEBPACK_IMPORTED_MODULE_1__.menuComponent);
document.querySelector("#linkAbout").addEventListener("click",_about__WEBPACK_IMPORTED_MODULE_2__.aboutComponent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Wiw2REFBNkQsZ0RBQWE7QUFDMUUsOERBQThELGtEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZiSWNvbiBmcm9tICcuL2ltYWdlcy9mYWNlYm9vay5zdmcnO1xuaW1wb3J0IHR3SWNvbiBmcm9tICcuL2ltYWdlcy90d2l0dGVyLnN2Zyc7XG5pbXBvcnQgeXRJY29uIGZyb20gJy4vaW1hZ2VzL3lvdXR1YmUuc3ZnJztcbmltcG9ydCB0a0ljb24gZnJvbSAnLi9pbWFnZXMvdGlrdG9rLnN2Zyc7XG5mdW5jdGlvbiBhYm91dENvbXBvbmVudCgpe1xuICAgIFxuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgYWJvdXRDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0Q29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgICBcbiAgICBsZXQgbWFwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFwYS5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNDk1Mi43NTEwMTM1MTgzMjchMmQtMTAzLjQzNzUyMDQxMjg0MTc0ITNkMjAuNDU3NDgwMzAwMDAwMDMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg0MmY1MTk3NTE1NGJlMmIlM0EweGE0YjVhZmYxMmEwM2MyYjYhMnNUYWNvcyUyMEFyYW5kYXMhNWUwITNtMiExc2VzLTQxOSEyc214ITR2MTY4MzU2MTk4Njk3MSE1bTIhMXNlcy00MTkhMnNteFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gO1xuICAgIG1hcGEgPSBtYXBhLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IGluZm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGVDb3B5LmlubmVyVGV4dCA9IFwiV2hvIGFyZSB3ZT9cIjtcbiAgICBjb25zdCBwYXJhZ0NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ0NvcHkuaW5uZXJUZXh0ID0gYFxuXG4gICAgV2VsY29tZSB0byBvdXIgdGFjb3MgcmVzdGF1cmFudCwgXG4gICAgXG4gICAgT3VyIHRhY29zIGFyZSBhIHRydWUgd29yayBvZiBhcnQsIG1hZGUgd2l0aCB5b3VyIGNob2ljZSBvZiBqdWljeSBtZWF0IG9yIGZyZXNoIHZlZ2V0YWJsZXMsIGFuZCB0b3BwZWQgd2l0aCBhIHZhcmlldHkgb2YgZmxhdm9yZnVsIGFuZCBjb2xvcmZ1bCB0b3BwaW5ncy4gRnJvbSB0aGUgY2xhc3NpYyBjYXJuZSBhc2FkYSB0byB0aGUgc3BpY3kgYW5kIHRhbmd5IGFsIHBhc3Rvciwgb3VyIHRhY29zIGFyZSBzdXJlIHRvIHNhdGlzZnkgeW91ciBjcmF2aW5ncyBhbmQgbGVhdmUgeW91IHdhbnRpbmcgbW9yZS5cbiAgICBcbiAgICBDb21lIHZpc2l0IHVzIHRvZGF5IGFuZCBleHBlcmllbmNlIHRoZSBqb3kgb2YgYXV0aGVudGljIE1leGljYW4gY3Vpc2luZS4gT3VyIGZyaWVuZGx5IHN0YWZmIGlzIHJlYWR5IHRvIHdlbGNvbWUgeW91IHdpdGggb3BlbiBhcm1zIGFuZCBzaG93IHlvdSB3aGF0IG1ha2VzIG91ciByZXN0YXVyYW50IHNvIHdvbmRlcmZ1bC4gV2UgY2FuJ3Qgd2FpdCB0byBzZXJ2ZSB5b3UhYDtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29udGFjdFRpdGxlLmlubmVyVGV4dCA9IFwiQ29udGFjIFVzXCI7XG4gICAgY29uc3Qgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBzb2NpYWxzLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxzXCIpO1xuICAgIGNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGZhY2Vib29rSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZhY2Vib29rSWNvbi5zcmMgPSBmYkljb247XG4gICAgZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcbiAgICBzb2NpYWxzLmFwcGVuZENoaWxkKGZhY2Vib29rKTtcblxuICAgIGNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgdHdpdHRlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0d2l0dGVySWNvbi5zcmMgPSB0d0ljb247XG4gICAgdHdpdHRlci5hcHBlbmRDaGlsZCh0d2l0dGVySWNvbik7XG4gICAgc29jaWFscy5hcHBlbmRDaGlsZCh0d2l0dGVyKTtcblxuICAgIGNvbnN0IHlvdXR1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgeW91dHViZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB5b3V0dWJlSWNvbi5zcmMgPSB5dEljb247XG4gICAgeW91dHViZS5hcHBlbmRDaGlsZCh5b3V0dWJlSWNvbik7XG4gICAgc29jaWFscy5hcHBlbmRDaGlsZCh5b3V0dWJlKTtcblxuICAgIGNvbnN0IHRpa3RvayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCB0aWt0b2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdGlrdG9rSWNvbi5zcmMgPSB0a0ljb247XG4gICAgdGlrdG9rLmFwcGVuZENoaWxkKHRpa3Rva0ljb24pO1xuICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQodGlrdG9rKTtcblxuICAgIGNvcHkuYXBwZW5kQ2hpbGQodGl0bGVDb3B5KTtcbiAgICBjb3B5LmFwcGVuZENoaWxkKHBhcmFnQ29weSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoc29jaWFscyk7XG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29weSk7XG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgYWJvdXRDb21wb25lbnQuYXBwZW5kQ2hpbGQobWFwYSk7XG4gICAgYWJvdXRDb21wb25lbnQuYXBwZW5kQ2hpbGQoaW5mb1NlY3Rpb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRDb21wb25lbnQpO1xufVxuXG5leHBvcnQge2Fib3V0Q29tcG9uZW50fTsiLCJmdW5jdGlvbiBpbml0aWFsU2V0VXAoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGl0ZW1NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGl0ZW1Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGl0ZW1BYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaW5rTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsXCJsaW5rTWVudVwiKTtcbiAgICBjb25zdCBoZWFkaW5nTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBsaW5rQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rQWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIixcImxpbmtBYm91dFwiKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaXN0SGVhZGVyKTtcbiAgICBsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1NZW51KTtcbiAgICBsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1Mb2dvKTtcbiAgICBsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1BYm91dCk7XG4gICAgaXRlbU1lbnUuYXBwZW5kQ2hpbGQobGlua01lbnUpO1xuICAgIGl0ZW1Mb2dvLmFwcGVuZENoaWxkKGhlYWRpbmdNZW51KTtcbiAgICBpdGVtQWJvdXQuYXBwZW5kQ2hpbGQobGlua0Fib3V0KTtcblxuICAgIGxpbmtNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGhlYWRpbmdNZW51LmlubmVyVGV4dCA9IFwiVGFjb3NcIjtcbiAgICBsaW5rQWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuICAgIGZvb3Rlci5pbm5lclRleHQgPSBcIkhpIHRoZXJlISBNYWRlIGJ5IEdCUkxIWihnYWJyMWVsMSlcIlxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQge2luaXRpYWxTZXRVcH07IiwiaW1wb3J0IHRhY29zQmlzdGVjIGZyb20gJy4vaW1hZ2VzL21lbnUvdGFjb3MtYmlzdGVjLmpwZyc7XG5pbXBvcnQgdGFjb3NDaG9yaXpvIGZyb20gJy4vaW1hZ2VzL21lbnUvdGFjb3MtY2hvcml6by5qcGcnO1xuaW1wb3J0IHRhY29zTGVuZ3VhIGZyb20gJy4vaW1hZ2VzL21lbnUvdGFjb3MtbGVuZ3VhLmpwZyc7XG5pbXBvcnQgdGFjb3NQYXN0b3IgZnJvbSAnLi9pbWFnZXMvbWVudS90YWNvcy1wYXN0b3IuanBnJztcbmltcG9ydCB0YWNvc1N1YWRlcm8gZnJvbSAnLi9pbWFnZXMvbWVudS90YWNvcy1zdWFkZXJvLmpwZyc7XG5pbXBvcnQgaG9yY2hhdGEgZnJvbSAnLi9pbWFnZXMvbWVudS9ob3JjaGF0YS5qcGcnO1xuaW1wb3J0IGphbWFpY2EgZnJvbSAnLi9pbWFnZXMvbWVudS9qYW1haWNhLmpwZyc7XG5pbXBvcnQgYXJyb3pDb25MZWNoZSBmcm9tICcuL2ltYWdlcy9tZW51L2Fycm96LWNvbi1sZWNoZS5qcGcnO1xuaW1wb3J0IGplcmljYWxsYSBmcm9tICcuL2ltYWdlcy9tZW51L2plcmljYWxsYS5qcGcnO1xuXG5mdW5jdGlvbiBtZW51Q29tcG9uZW50KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb21wb25lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgY29uc3QgdGFjb3NMaXN0ID0gW1xuICAgIHtcIm5hbWVcIjpcIlRhY29zIGRlIEJpc3RlY1wiLFwicHJpY2VcIjoxLjAsXCJpbWFnZVVSTFwiOnRhY29zQmlzdGVjfSxcbiAgICB7XCJuYW1lXCI6XCJUYWNvcyBkZSBDaG9yaXpvXCIsXCJwcmljZVwiOjEuMCxcImltYWdlVVJMXCI6dGFjb3NDaG9yaXpvfSxcbiAgICB7XCJuYW1lXCI6XCJUYWNvcyBkZSBMZW5ndWFcIixcInByaWNlXCI6MS41LFwiaW1hZ2VVUkxcIjp0YWNvc0xlbmd1YX0sXG4gICAge1wibmFtZVwiOlwiVGFjb3MgZGUgUGFzdG9yXCIsXCJwcmljZVwiOjEuNSxcImltYWdlVVJMXCI6dGFjb3NQYXN0b3J9LFxuICAgIHtcIm5hbWVcIjpcIlRhY29zIGRlIFN1YWRlcm9cIixcInByaWNlXCI6MC45LFwiaW1hZ2VVUkxcIjp0YWNvc1N1YWRlcm99XG4gICAgXTtcbiAgICBcbiAgICBjb25zdCBkcmlua3NMaXN0ID0gW1xuICAgIHtcIm5hbWVcIjpcIkFndWEgZGUgaG9yY2hhdGFcIixcInByaWNlXCI6Mi4wLFwiaW1hZ2VVUkxcIjpob3JjaGF0YX0sXG4gICAge1wibmFtZVwiOlwiQWd1YSBkZSBqYW1haWNhXCIsXCJwcmljZVwiOjEuOCxcImltYWdlVVJMXCI6amFtYWljYX1cbiAgICBdO1xuXG4gICAgY29uc3QgZGVzc2VydHNMaXN0ID0gW1xuICAgIHtcIm5hbWVcIjpcIkFycm96IGNvbiBsZWNoZVwiLFwicHJpY2VcIjoxLjAsXCJpbWFnZVVSTFwiOmFycm96Q29uTGVjaGV9LFxuICAgIHtcIm5hbWVcIjpcIkplcmljYWxsYVwiLFwicHJpY2VcIjowLjcsXCJpbWFnZVVSTFwiOmplcmljYWxsYX1cbiAgICBdXG5cbiAgICBcbiAgICBjb25zdCB0YWNvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgY29uc3QgdGFjb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0YWNvc1RpdGxlLmlubmVyVGV4dCA9IFwiVGFjb3NcIjtcbiAgICBjb25zdCBkcmlua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBkcmlua3NUaXRsZS5pbm5lclRleHQgPSBcIkRyaW5rc1wiO1xuICAgIGNvbnN0IGRlc3NlcnRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgZGVzc2VydHNUaXRsZS5pbm5lclRleHQgPSBcIkRlc3NlcnRzXCJcblxuICAgIHRhY29zLmFwcGVuZENoaWxkKHRhY29zVGl0bGUpO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NUaXRsZSk7XG4gICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNUaXRsZSk7XG5cbiAgICBsb2FkVG9DYXRlZ29yeSh0YWNvcywgdGFjb3NMaXN0KTtcbiAgICBsb2FkVG9DYXRlZ29yeShkcmlua3MsZHJpbmtzTGlzdCk7XG4gICAgbG9hZFRvQ2F0ZWdvcnkoZGVzc2VydHMsIGRlc3NlcnRzTGlzdCk7XG5cbiAgICBtZW51Q29tcG9uZW50LmFwcGVuZENoaWxkKHRhY29zKTtcbiAgICBtZW51Q29tcG9uZW50LmFwcGVuZENoaWxkKGRyaW5rcyk7XG4gICAgbWVudUNvbXBvbmVudC5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb0NhdGVnb3J5KGNhdGVnb3J5LCBsaXN0SXRlbXMpe1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IFxuICAgICAgICBgPGgyPiR7ZWxlbWVudC5uYW1lfTwvaDI+XG4gICAgICAgIDxpbWcgc3JjPSR7ZWxlbWVudC5pbWFnZVVSTH0+XG4gICAgICAgIDxwPiQke2VsZW1lbnQucHJpY2V9PC9wPmA7XG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1tZW51XCIpO1xuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcbn1cblxuXG5cblxuZXhwb3J0IHttZW51Q29tcG9uZW50fVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vY29uc29sZS5sb2coXCJob2wgXCIpO1xuaW1wb3J0IHsgaW5pdGlhbFNldFVwIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyBtZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgYWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dFwiO1xuXG5pbml0aWFsU2V0VXAoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlua01lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbWVudUNvbXBvbmVudCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtBYm91dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhYm91dENvbXBvbmVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
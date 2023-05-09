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
function aboutComponent(){
    const main = document.querySelector("main");
    main.innerHTML = "";

    const aboutComponent = document.createElement("div");
    aboutComponent.classList.add("about");
    
    let mapa = document.createElement("div");
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14952.751013518327!2d-103.43752041284174!3d20.45748030000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f51975154be2b%3A0xa4b5aff12a03c2b6!2sTacos%20Arandas!5e0!3m2!1ses-419!2smx!4v1683561986971!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapa = mapa.firstElementChild;
    const info = document.createElement("div");
    info.innerText = `

    Welcome to our tacos restaurant, where we take pride in serving the best Mexican cuisine in town! Our goal is to provide a memorable dining experience that will leave you feeling satisfied and wanting to come back for more.
    
    At our restaurant, we believe that food is not just fuel, but an experience that can be enjoyed with friends and family. That's why we use only the freshest ingredients and authentic recipes to create our delicious tacos, burritos, and other Mexican specialties.
    
    Our tacos are a true work of art, made with your choice of juicy meat or fresh vegetables, and topped with a variety of flavorful and colorful toppings. From the classic carne asada to the spicy and tangy al pastor, our tacos are sure to satisfy your cravings and leave you wanting more.
    
     Come visit us today and experience the joy of authentic Mexican cuisine. Our friendly staff is ready to welcome you with open arms and show you what makes our restaurant so wonderful. We can't wait to serve you!`;
    info.classList.add("info");
    aboutComponent.appendChild(mapa);
    aboutComponent.appendChild(info);
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
function menuComponent(){
    const main = document.querySelector("main");
    const menuComponent = document.createElement("div");
    menuComponent.classList.add("menu");
    menuComponent.innerText = "Menu!";

    main.innerHTML = menuComponent.innerHTML;
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9XQUFvVztBQUNwVztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFc0I7Ozs7Ozs7VUNUdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDOEM7QUFDUDtBQUNFOztBQUV6QywyREFBWTtBQUNaLDZEQUE2RCxnREFBYTtBQUMxRSw4REFBOEQsa0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5pdGlhbC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dENvbXBvbmVudCgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBhYm91dENvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRDb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICAgIFxuICAgIGxldCBtYXBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXBhLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE0OTUyLjc1MTAxMzUxODMyNyEyZC0xMDMuNDM3NTIwNDEyODQxNzQhM2QyMC40NTc0ODAzMDAwMDAwMyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODQyZjUxOTc1MTU0YmUyYiUzQTB4YTRiNWFmZjEyYTAzYzJiNiEyc1RhY29zJTIwQXJhbmRhcyE1ZTAhM20yITFzZXMtNDE5ITJzbXghNHYxNjgzNTYxOTg2OTcxITVtMiExc2VzLTQxOSEyc214XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPmA7XG4gICAgbWFwYSA9IG1hcGEuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mby5pbm5lclRleHQgPSBgXG5cbiAgICBXZWxjb21lIHRvIG91ciB0YWNvcyByZXN0YXVyYW50LCB3aGVyZSB3ZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgdGhlIGJlc3QgTWV4aWNhbiBjdWlzaW5lIGluIHRvd24hIE91ciBnb2FsIGlzIHRvIHByb3ZpZGUgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCB3aWxsIGxlYXZlIHlvdSBmZWVsaW5nIHNhdGlzZmllZCBhbmQgd2FudGluZyB0byBjb21lIGJhY2sgZm9yIG1vcmUuXG4gICAgXG4gICAgQXQgb3VyIHJlc3RhdXJhbnQsIHdlIGJlbGlldmUgdGhhdCBmb29kIGlzIG5vdCBqdXN0IGZ1ZWwsIGJ1dCBhbiBleHBlcmllbmNlIHRoYXQgY2FuIGJlIGVuam95ZWQgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHkuIFRoYXQncyB3aHkgd2UgdXNlIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIGFuZCBhdXRoZW50aWMgcmVjaXBlcyB0byBjcmVhdGUgb3VyIGRlbGljaW91cyB0YWNvcywgYnVycml0b3MsIGFuZCBvdGhlciBNZXhpY2FuIHNwZWNpYWx0aWVzLlxuICAgIFxuICAgIE91ciB0YWNvcyBhcmUgYSB0cnVlIHdvcmsgb2YgYXJ0LCBtYWRlIHdpdGggeW91ciBjaG9pY2Ugb2YganVpY3kgbWVhdCBvciBmcmVzaCB2ZWdldGFibGVzLCBhbmQgdG9wcGVkIHdpdGggYSB2YXJpZXR5IG9mIGZsYXZvcmZ1bCBhbmQgY29sb3JmdWwgdG9wcGluZ3MuIEZyb20gdGhlIGNsYXNzaWMgY2FybmUgYXNhZGEgdG8gdGhlIHNwaWN5IGFuZCB0YW5neSBhbCBwYXN0b3IsIG91ciB0YWNvcyBhcmUgc3VyZSB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MgYW5kIGxlYXZlIHlvdSB3YW50aW5nIG1vcmUuXG4gICAgXG4gICAgIENvbWUgdmlzaXQgdXMgdG9kYXkgYW5kIGV4cGVyaWVuY2UgdGhlIGpveSBvZiBhdXRoZW50aWMgTWV4aWNhbiBjdWlzaW5lLiBPdXIgZnJpZW5kbHkgc3RhZmYgaXMgcmVhZHkgdG8gd2VsY29tZSB5b3Ugd2l0aCBvcGVuIGFybXMgYW5kIHNob3cgeW91IHdoYXQgbWFrZXMgb3VyIHJlc3RhdXJhbnQgc28gd29uZGVyZnVsLiBXZSBjYW4ndCB3YWl0IHRvIHNlcnZlIHlvdSFgO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgYWJvdXRDb21wb25lbnQuYXBwZW5kQ2hpbGQobWFwYSk7XG4gICAgYWJvdXRDb21wb25lbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7YWJvdXRDb21wb25lbnR9OyIsImZ1bmN0aW9uIGluaXRpYWxTZXRVcCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgaXRlbU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgaXRlbUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgaXRlbUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGlua01lbnUuc2V0QXR0cmlidXRlKFwiaWRcIixcImxpbmtNZW51XCIpO1xuICAgIGNvbnN0IGhlYWRpbmdNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGxpbmtBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtBYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGlua0Fib3V0XCIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xuICAgIGxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbU1lbnUpO1xuICAgIGxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbUxvZ28pO1xuICAgIGxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbUFib3V0KTtcbiAgICBpdGVtTWVudS5hcHBlbmRDaGlsZChsaW5rTWVudSk7XG4gICAgaXRlbUxvZ28uYXBwZW5kQ2hpbGQoaGVhZGluZ01lbnUpO1xuICAgIGl0ZW1BYm91dC5hcHBlbmRDaGlsZChsaW5rQWJvdXQpO1xuXG4gICAgbGlua01lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgaGVhZGluZ01lbnUuaW5uZXJUZXh0ID0gXCJUYWNvc1wiO1xuICAgIGxpbmtBYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gICAgZm9vdGVyLmlubmVyVGV4dCA9IFwiSGkgdGhlcmUhIE1hZGUgYnkgR0JSTEhaKGdhYnIxZWwxKVwiXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7aW5pdGlhbFNldFVwfTsiLCJmdW5jdGlvbiBtZW51Q29tcG9uZW50KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb21wb25lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgbWVudUNvbXBvbmVudC5pbm5lclRleHQgPSBcIk1lbnUhXCI7XG5cbiAgICBtYWluLmlubmVySFRNTCA9IG1lbnVDb21wb25lbnQuaW5uZXJIVE1MO1xufVxuXG5leHBvcnQge21lbnVDb21wb25lbnR9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vY29uc29sZS5sb2coXCJob2wgXCIpO1xuaW1wb3J0IHsgaW5pdGlhbFNldFVwIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyBtZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgYWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dFwiO1xuXG5pbml0aWFsU2V0VXAoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlua01lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbWVudUNvbXBvbmVudCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtBYm91dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhYm91dENvbXBvbmVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
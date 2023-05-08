//console.log("hol ");
import { initialSetUp } from "./initial-page";
import { menuComponent } from "./menu";
import { aboutComponent } from "./about";

initialSetUp();
document.querySelector("#linkMenu").addEventListener("click",menuComponent);
document.querySelector("#linkAbout").addEventListener("click",aboutComponent);

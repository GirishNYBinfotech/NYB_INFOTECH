import "./style.css";
import { message } from "./message";
import logo from "./logo.png";

const app = document.getElementById("app");
const heading = document.createElement("h1");
heading.innerText = message;
const image = document.createElement("img");
image.src = logo;
app.appendChild(heading);
app.appendChild(image);
console.log("Webpack Running...");
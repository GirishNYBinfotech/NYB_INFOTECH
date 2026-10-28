console.log("JavaScript file connected successfully!");

//WINDOW API
function useWindow() {
    document.getElementById("output").textContent =
        "Window Width: " + window.innerWidth +
        " | Height: " + window.innerHeight;
}

//DOCUMENT API
function useDocument() {
    document.getElementById("heading").textContent =
        "Document API is working!";

    document.getElementById("output").textContent =
        "Page Title: " + document.title;
}

//LOCATION API
function useLocation() {
    document.getElementById("output").textContent =
        "Current URL: " + location.href;

    console.log("Hostname:", location.hostname);
    console.log("Pathname:", location.pathname);
}

//HISTORY API
function useHistory() {
    history.pushState({ page: "example" },"","?page=example")
    document.getElementById("output").textContent =
        "History entry added. Current URL: " + location.href;
}

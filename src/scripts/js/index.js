document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href.split("/");
    console.log(url);
    if (url[1] === "scripts") {
        window.location.replace("https://geoengine.org");
    }
    const msg = document.getElementById('message');
    msg.textContent = "Frontend is working.";
})
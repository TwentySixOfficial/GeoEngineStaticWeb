document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href.split("/");
    console.log(url);
    const msg = document.getElementById('message');
    msg.textContent = "Frontend is working.";
})




//Function to actvate the hamburger menu on smaller screen sizes
function hamburgerActivation(){

    console.log("hamburger activiation Loaded");

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-list");

    //Error handling
    if(!hamburger || !navMenu){
        console.error("Hamburger or nav-list not found!");
        return;
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-item").forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
}

//Adding the functionality once the DOM content has fully rendered
document.addEventListener("DOMContentLoaded", () => {
    hamburgerActivation();
})
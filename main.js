

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    navbar.classList.toggle("active");
};




document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});





let form = document.querySelector(".appointment-form");

if(form){
form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Your appointment has been booked successfully!");
});
}




let contactForm = document.querySelector(".contact-form");

if(contactForm){
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});
}
const menu = document.getElementById('menu-icon');
const navLinks = document.querySelector(".nav");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".link");
console.log(links);


menu.addEventListener("click", () => {

    navLinks.style.display = "flex";

    navLinks.classList.add("links");

});

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 200;

        if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight){

            links.forEach(link =>{
                link.classList.remove("active");
                console.log(link.getAttribute("href"));

                if(link.getAttribute("href") === "#" + section.id){
                    link.classList.add("active");
                }
                
            })
        }
    })
});

links.forEach(navLink => {
    
    navLink.addEventListener("click", () => {
        
    });
});



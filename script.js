const menu =  document.querySelector(".menu");
const links = document.querySelector(".navegacion-links")
menu.addEventListener("click",()=>{
    links.classList.toggle("visible")
});
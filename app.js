const myNav=document.querySelector(".header_nav")

window.addEventListener('scroll',()=>{
   if(window.scrollY>myNav.offsetHeight+150){
      myNav.classList.add("show-nav")
   }else{
      myNav.classList.remove("show-nav")
   }
})

 
const links=document.querySelectorAll(".navbar-nav a")
 
links.forEach((link)=>{
   link.addEventListener("click",()=>{
      links.forEach((btn)=>{
         btn.classList.remove("active")
      })
      link.classList.add("active")
   })
})



//  hide expand nav on click

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsibleNavId')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

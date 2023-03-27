/*Show Menu*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*Menu Show*/
/* Validate if constant exists */ 
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

/*Menu Hidden*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

/* ADD BLUR TO HEADER */
const blurHeader = () =>{
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add   ("blur-header")
                       : header.classList.remove("blur-header")               
}
window.addEventListener("scroll, blurHeader")

/* Show Scroll Up*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrolly >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelector("selector[id]")

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute("id"),
         sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("activate-link")
        } else{
            sectionsClass.classList.remove("activate-link")
        }
    })  

}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home__data, .list__container')
sr.reveal('.home__img', {origin:'bottom'})
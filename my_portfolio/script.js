function myMenuFunction() {
    var menuBth = document.getElementById('myNavMenu')
    if (menuBth.className === 'nav-menu') {
        menuBth.className += ' responsive'
    }
    else {
        menuBth.className = 'nav-menu'
    }
}

// dark mode

const body = document.querySelector('body')
// console.log(body)
const toggleSwitch = document.getElementById("toggle-switch")

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
})

var typingEffect = new Typed(".typedText", {
    strings: ['Coder', 'Web Developer', 'Android Developer', 'Programmer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
})

sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.text-info', { delay: 100 })
sr.reveal('.text-btn', { delay: 100 })
sr.reveal('.social_icons', { delay: 100 })
sr.reveal('.featured-image', { delay: 100 })
sr.reveal('.project-box', { interval: 200 })
sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,

})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

const srRght = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,

})
srRght.reveal('.skill', { delay: 100 })
srRght.reveal('.skill-box', { delay: 100 })

const sections = document.querySelectorAll('.section[id]')
console.log(sections);
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        // console.log(sectionHeight,sectionTop,sectionId);

        if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.add("active-link"                )

        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.remove("active-link"                )

        }

    })
}



window.addEventListener('scroll',scrollActive)
function openEmail() {
    window.location.href = "mailto:siddmohdasim3992@gmail.com";
}
function openPhone() {
    window.location.href = "tel:9829954518";
}
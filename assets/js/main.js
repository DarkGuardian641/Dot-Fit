/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm= document.getElementById('calculate-form'),
        calculateCm=document.getElementById('calculate-cm'),
        calculateKg=document.getElementById('calculate-cm'),
        calculateMessage=document.getElementById('calculate-message')

const calculateBmi= (e) =>{
    e.preventDefault()

    if(calculateCm.value ==='' || calculateKg.value ===''){
        calculateMessage.classList.add('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the height and weight😄'
        setTimeout(()=>
        {
            calculateMessage.textContent = ''
        },3000)
    
    }else{
        const cm=calculateCm.value/100,
        kg= calculateKg.value,
        bmi=Math.round(kg/(cm*cm))

        if(bmi<18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are skinny'

        }else if(bmi<25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are healthy'
        }else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are overweight'
        }

        calculateCm.value=''
        calculateKg.value=''

        setTimeout(()=>
        {
            calculateMessage.textContent=''
        },4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser=document.getElementById('contact-user')

const sendEmail=(e)=>
{
    e.preventDefault() 
    if(contactUser.value ===''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent='you must enter youre email'
        setTimeout(() => {
            contactMessage.textContent=''
          }, 3000);

    }else{
        emailjs.sendForm('service_8ii265v','template_guf0dsp','#contact-form','VQaq6RG_bXgUd7BNm')
        .then(()=>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent='you registered successfully'

            setTimeout(()=>{
                contactMessage.textContent =''
            },3000)
        },(error)=>{
            alert('oops! something has failed..',error)
        })

        contactUser.value=''
    }
}
contactForm.addEventListener('submit',sendEmail)

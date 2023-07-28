import './sass/main.scss'

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-container');
const nav = document.querySelector('.navbar');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    nav.classList.toggle('nav-active');
})

document.addEventListener('scroll',()=>{
    const position=window.scrollY;
    if(position){
        navbar.classList.add('navbar-fixed');
    }
    else{
        navbar.classList.remove('navbar-fixed');

    }
})

//form validation
const firstName = document.getElementById('firstname');
const name =document.getElementById('name');
const email=document.getElementById('email');
const number = document.getElementById('number');
const btn = document.getElementById('submit-btn')
const cv = document.getElementById('cv');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    inputValidate();
});
function inputValidate(){
    const firstNameVal = firstName.value.trim();
    const nameVal = name.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const resume = cv.value.trim();
    if(firstNameVal === ""){
        setError(firstName,"First name is required");
    }
    else{
        setSuccess(firstName);
    }
    if(nameVal === ""){
        setError(name,"Name is required");
    }
    else{
        setSuccess(name);
    }
    if(emailVal === ""){
        setError(email,"Email is required");
    }
    else if (!isValidEmail(emailVal)) {
        setError(email, "Invalid email format");
    }
    else{
        setSuccess(email);
    }
    if(numberVal === ""){
        setError(number,"Number is required");
    }
    else if(numberVal.length !== 10){
        setError(number,"Mobile number must have exactly 10 digits");
    }
    else{
        setSuccess(number);
    }
    if(resume === ""){
        setError(cv,"CV is required");
    }
    else{
        setSuccess(cv);
    }
}

function setError(element,message){
    const groupElement =element.parentElement;
    const groupError = groupElement.querySelector('.error');
    groupError.innerHTML = message;
    groupElement.classList.add('error');
    groupElement.classList.remove('success'); 

}

function setSuccess(element){
    const groupElement =element.parentElement;
    const groupError = groupElement.querySelector('.error');
    groupError.innerHTML = ' ';
    groupElement.classList.add('success');
    groupElement.classList.remove('error'); 

}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }






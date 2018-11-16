let body = document.querySelector('body');
let header = document.querySelector('header');
let func = document.querySelector('.secTwo')
let a = document.querySelector('nav a:nth-child(2)');

body.onscroll = () => {
    if(scrollY > 70){
        header.classList.add('header2');
    }
    else{
        header.classList.remove('header2');
    
    }
    if(scrollY >= 652){
        header.classList.remove('header2');
    }
    if(scrollY >= 690){
        header.classList.add('header2');
    }
    
}
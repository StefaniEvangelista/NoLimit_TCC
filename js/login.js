let h3One = document.querySelector('.select h3:first-child');
let h3Two = document.querySelector('.select h3:last-child');
let inputs = document.querySelectorAll('input');
let ancora = document.querySelector('.ancora');
let botao = document.querySelector('section button');
let login = document.querySelector('.inputsLogin');
let cadastro = document.querySelector('.inputsCadastro');

h3One.onclick = () => {
    h3One.classList.add('h3Click');
    h3Two.classList.remove('h3Click');
    h3One.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    h3Two.style.backgroundColor = '#7ED957';
    login.style.opacity = '1';
    cadastro.style.opacity = '0.3';
    login.style.transform = 'translateY(0)';
    cadastro.style.transform = 'translateY(100%)';
    
    

}

h3Two.onclick = () => {
    h3One.classList.remove('h3Click');
    h3Two.classList.add('h3Click');
    h3One.style.backgroundColor = '#7ED957';
    h3Two.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    login.style.opacity = '0.3';
    cadastro.style.opacity = '1';
    login.style.transform = 'translateY(100%)';
    cadastro.style.transform = 'translateY(0)';

}

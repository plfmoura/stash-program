//pegando os elementos 

const abrir = document.querySelector('.iniciar-programa');
const modalContainer = document.querySelector('.modal__content');
const modalPrograma = document.querySelector('.modal__programa');
const fechar = document.querySelector('.fechar-programa');

//para abrir o programa

abrir.addEventListener('click', () => {
    modalContainer.classList.add('mostrar');
    modalPrograma.classList.add('mostrar');
});

//para fechar o programa

fechar.addEventListener('click', () => {
    modalContainer.classList.remove('mostrar');
    modalPrograma.classList.remove('mostrar');
});


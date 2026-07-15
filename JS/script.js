const botonMenu = document.querySelector('.menu-button');
const botonCerrar = document.querySelector('.close-button');
const menu = document.querySelector('.menu');

botonMenu.addEventListener('click', () => {
  menu.classList.add('abierto');
});

botonCerrar.addEventListener('click', () => {
  menu.classList.remove('abierto');
});
const linksDelMenu = document.querySelectorAll('.menu a');

linksDelMenu.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('abierto');
  });
});
const proyectoCards = document.querySelectorAll('.proyecto-card[data-modal]');
const modalCerrarBotones = document.querySelectorAll('.modal-cerrar');

proyectoCards.forEach((card) => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('abierto');
  });
});

modalCerrarBotones.forEach((boton) => {
  boton.addEventListener('click', () => {
    boton.closest('.modal-overlay').classList.remove('abierto');
  });
});
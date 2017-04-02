/**
 * Created by maxim on 21.03.2017.
 */

//бутерброд
var page = document.querySelector('.page-header__wrapper');
var menu1 = document.querySelector('.menu__catalog');
var menu2 = document.querySelector('.menu__search');
var menuButton = document.querySelector('.menu__button');
page.classList.add('page-header__wrapper--js');
menu1.classList.add('menu__catalog--js');
menu2.classList.add('menu__search--js');
menuButton.classList.add('menu__button--js');

menuButton.addEventListener('click', function () {
  menu1.classList.toggle('menu__catalog--js');
  menu2.classList.toggle('menu__search--js');
  menuButton.classList.toggle('menu__button--close');
});




// Вызов modal окна
var modalWindow = document.querySelector('.modal');
var modalBody = document.querySelector('body');
var modalButton = document.querySelector('.product-view__btn');

modalButton.addEventListener('click', function (event) {
  event.preventDefault();
  modalWindow.classList.add('modal--visible');
  modalBody.classList.add('overlay');
});



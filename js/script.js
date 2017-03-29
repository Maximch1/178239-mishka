/**
 * Created by maxim on 21.03.2017.
 */

//бутерброд
var Page = document.querySelector('.page-header__wrapper');
var Menu1 = document.querySelector('.menu__catalog');
var Menu2 = document.querySelector('.menu__search');
var menu_button = document.querySelector('.menu__button');
Page.classList.add('page-header__wrapper--js');
Menu1.classList.add('menu__catalog--js');
Menu2.classList.add('menu__search--js');

menu_button.addEventListener('click', function () {
  Menu1.classList.toggle('menu__catalog--js');
  Menu2.classList.toggle('menu__search--js');
  menu_button.classList.toggle('menu__button--close');
});




// Вызов modal окна
var window = document.querySelector('.modal');
var body = document.querySelector('body');
var modal_button = document.querySelector('.product-view__btn');

modal_button.addEventListener('click', function () {
  window.classList.add('modal--visible');
  body.classList.add('overlay');
});


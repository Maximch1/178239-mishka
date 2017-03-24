/**
 * Created by maxim on 21.03.2017.
 */

var Page = document.querySelector('.page-header__wrapper');
var Menu1 = document.querySelector('.menu__catalog');
var Menu2 = document.querySelector('.menu__search');
var Button = document.querySelector('.menu__button');
Page.classList.add('page-header__wrapper--js');
Menu1.classList.add('menu__catalog--js');
Menu2.classList.add('menu__search--js');

Button.addEventListener('click', function() {
  Menu1.classList.toggle('menu__catalog--js');
  Menu2.classList.toggle("menu__search--js");
  Button.classList.toggle('menu__button--close');
});

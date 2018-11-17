import $ from 'jquery';

class MobileMenu {
  constructor() {
    // bad syntactically spaghetti :-(
    // $(".site-header__menu-icon").click(() => {
    //   alert("icon was clicked");
    // });

    // better do this
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.siteHeader = $(".site-header");
    this.events();
  }

  events() {
    // but events in here
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    // perform the action
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events(evt, args) {
    // open the modal
    this.openModalButton.click(this.openModal.bind(this));
    // close the modal
    this.closeModalButton.click(this.closeModal.bind(this));
    // close the modal on ESC Keyboard Press
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    console.log(e.keyCode);
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal
(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: (evt, action) => {
      if ( evt.keyCode === ESC_KEYCODE ) {
        action(evt)
      }
    },

    isEnterEvent: (evt, action) => {
      if ( evt.keyCode === ENTER_KEYCODE ) {
        action(evt)
      }
    }
  }
})();

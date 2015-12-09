var Dispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(notePlayed) {
    Dispatcher.dispatch({
      actionType: "NOTE_PLAYED",
      noteName: notePlayed
    });
  },

  keyReleased: function(noteReleased) {
    Dispatcher.dispatch({
      actionType: "NOTE_RELEASED",
      noteName: noteReleased
    });
  },
}


module.exports = KeyActions;

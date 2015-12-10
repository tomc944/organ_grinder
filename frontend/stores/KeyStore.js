var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var KeyStore = new Store(Dispatcher);

var _keys = [];

KeyStore.all = function() {
  return _keys.slice();
};

KeyStore.isPlaying = function(noteName) {
  var index = _keys.indexOf(noteName);

  if (index !== -1) {return true;}

  return false;
};

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "NOTE_PLAYED":
      playNote(payload.noteName);
      break;
    case "NOTE_RELEASED":
      releaseNote(payload.noteName);
      break;
    case "RECORDED_NOTE_PLAYED":
      playRecord(payload.notesNames);
      break;
  }
};

var playNote = function(noteName) {
  var index = _keys.indexOf(noteName);

  if (index === -1) { _keys.push(noteName); }

  KeyStore.__emitChange();
};

var releaseNote = function(noteName) {
  var index = _keys.indexOf(noteName);

  if (index !== -1) { _keys.splice(index, 1); }

  KeyStore.__emitChange();
};

var playRecord = function(notesNames) {
  _keys = notesNames;

  KeyStore.__emitChange();
};

module.exports = KeyStore;

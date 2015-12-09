var Dispatcher = require('../dispatcher/Dispatcher')
var KeyActions = require('../actions/key_actions.js')

var Mapping = {
  65: 'C',
  83: 'D',
  68: 'E',
  70: 'F',
  71: 'G',
  72: 'A',
  74: 'B'
};

$(document).on('keydown', function(event){
  KeyActions.keyPressed(Mapping[event.keyCode]);

});

$(document).on('keyup', function(event){
  KeyActions.keyReleased(Mapping[event.keyCode]);
});

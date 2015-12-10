var React = require('react'),
    Key = require('./Key'),
    Recorder = require('./Recorder'),
    TONES = require('../constants/Tones');

var Organ = React.createClass({
  render: function() {
    var keyList = Object.keys(TONES).map(function(noteName, index) {
      return( <Key key={index} note={noteName}/>);
    });

    return (
      <div>
        {keyList}
        <Recorder/>
      </div>
    )
  }
});

module.exports = Organ;

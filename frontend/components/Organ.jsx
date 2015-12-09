var React = require('react'),
    Key = require('./Key'),
    TONES = require('../constants/Tones');

var Organ = React.createClass({
  render: function() {
    return (
      <div>
        {
          this.props.notes.map(function(noteName, index) {
            return(
              <Key key={index} note={noteName}/>
            );
          })
        }
      </div>
    )
  }
});

module.exports = Organ;

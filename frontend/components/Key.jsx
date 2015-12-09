var React = require('react'),
    TONES = require('../constants/Tones'),
    KeyStore = require('../stores/KeyStore'),
    Note = require('../util/Note');

var Key = React.createClass({
  getInitialState: function () {
    return ({ playing: false });
  },
  __playNote: function() {
    if (KeyStore.isPlaying(this.props.note)) {
      this.setState({ playing: true });
      this.note.start();
    } else {
      this.setState({ playing: false });
      this.note.stop();
    }
  },
  componentDidMount: function() {
    var noteName = this.props.note;
    this.note = new Note(TONES[noteName]);
    this.removeToken = KeyStore.addListener(this.__playNote);
  },
  componentWillUnmount: function() {
    this.removeToken.remove();
  },

  render: function() {
    var playing = this.state.playing ? "playing" : "";

    return(
      <div className={playing}>
        {this.props.note}
      </div>
    );
  }
});

module.exports = Key;

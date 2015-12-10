var React = require('react'),
    Track = require('../util/Track'),
    KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function() {
    return({
      isRecording: false,
      track: new Track("untitled")
    });
  },
  startRecording: function() {
    var currentTrack = this.state.track;
    // var addNotesToTrack = currentTrack.addNotes.bind(currentTrack, KeyStore.all);
    var addNotesToTrack = function() {
      return KeyStore.all();
    }
    // console.log(addNotesToTrack);
    KeyStore.addListener(currentTrack.addNotes.bind(currentTrack, addNotesToTrack()));
  },

  render: function(){
    return (
      <div>
        <button onClick={this.startRecording}>
          Record
        </button>
        <button onClick={this.state.track.stopRecording.bind(this.state.track)}>
          Stop
        </button>
        <button onClick={this.state.track.play.bind(this.state.track)}>
          Play
        </button>
      </div>
    )
  }
});

module.exports = Recorder;

var KeyStore = require('../stores/KeyStore');

function Track (name, roll) {
  this.name = name;
  if (typeof roll !== 'undefined') { this.roll = roll; }
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.time = new Date();
};

Track.prototype.addNotes = function (playedNotes) {
  var elapsedTime = new Date() - this.time;
  this.roll.push({timeSlice: elapsedTime, notes: playedNotes});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
}

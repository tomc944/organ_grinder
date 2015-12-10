var KeyActions = require('../actions/key_actions');

function Track (name, roll) {
  this.name = name;
  if (typeof roll !== 'undefined') {
    this.roll = roll;
  } else {
    this.roll = [];
  }
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.time = new Date();
};

Track.prototype.addNotes = function (playedNotes) {
  var elapsedTime = new Date() - this.time;
  this.roll.push({timeSlice: elapsedTime, notes: playedNotes});
  console.log(this.roll);
};

Track.prototype.stopRecording = function () {
  console.log(this);
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (typeof this.interval !=='undefined') {
    return;
  }

  var playBackStartTime = Date.now();
  var currentNote = 0;

  var that = this;
  
  var intervalId = setInterval(function(){
    if (currentNote <= that.roll.length) {
      var currentTime = Date.now() - playBackStartTime;

      if (currentTime > that.roll[currentNote].timeSlice) {
        // debugger
        KeyAction.playRecorded(that.roll[currentNote].notes);
        currentNote++;
      }
    }

  }, 10);


  // function playMusic(currentTime) {
  //   this.roll.forEach(function(note){
  //     if (note.timeSlice >= currentTime) {
  //
  //     }
  //   });
  // }
  //
  // var intervalId = setInterval(playMusic.bind(null, (Date.now - playBackStartTime), 10);
};


//
//
// clearInterval(intervalId);

module.exports = Track;

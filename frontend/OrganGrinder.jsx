var ReactDOM = require('react-dom'),
    React = require('react'),
    KeyListener = require('./util/KeyListener'),
    Organ = require('./components/Organ'),
    noteList = ["A", "B", "C", "D", "E", "F", "G"];

document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector('#content');
  ReactDOM.render(<Organ notes={noteList}/>, content);
});

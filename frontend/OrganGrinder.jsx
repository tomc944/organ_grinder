var ReactDOM = require('react-dom'),
    React = require('react'),
    KeyListener = require('./util/KeyListener'),
    Organ = require('./components/Organ');

document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector('#content');
  ReactDOM.render(<Organ/>, content);
});

var TodoList = require('./components/todo_list.jsx');
var ReactDOM = require('react-dom');
var React = require('react');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
  );
});

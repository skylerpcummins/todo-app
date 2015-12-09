var React = require('react');
var TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({

  handleDone: function(e) {
    TodoStore.toggleDone(this.props.todoItem.id);
  },

  render: function(){
    var buttonText = this.props.todoItem.done === false ? "Done" : "Undo";

    return (
      <button onClick={this.handleDone}>{buttonText}</button>
    );
  }

});

module.exports = DoneButton;

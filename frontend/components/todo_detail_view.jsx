var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoDetailView = React.createClass({

  handleDestroy: function(e) {
    TodoStore.destroy(this.props.todoItem.id);
  },

  render: function() {
    return (
      <div>
        <div>{this.props.todoItem.body}</div>
        <button onClick={this.handleDestroy}>Delete</button>
      </div>
    );
  }

});

module.exports = TodoDetailView;

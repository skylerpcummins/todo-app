var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoListItem = require('./todo_list_item');
var TodoForm = require('./todo_form');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      todoItems: TodoStore.all()
    };
  },

  todosChanged: function() {
    this.setState({todoItems: TodoStore.all()});
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function() {

    var todoItems = this.state.todoItems.map(function(todoItem, idx) {
      return <TodoListItem key={todoItem.id}
              todoItem={{title: todoItem.title, body: todoItem.body, id: todoItem.id, done: todoItem.done}} />;
    });

    return (
      <div>
        <div>
            {todoItems}
        </div>
        <br/>
        <div>
            <TodoForm/>
        </div>
      </div>
    );
  }
});

module.exports = TodoList;

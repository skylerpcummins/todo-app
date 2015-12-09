var _todos = [];
var _callbacks = [];

var TodoStore = {

  all: function() {
    return _todos.slice();
  },

  fetch: function() {
    $.get('/api/todos', {}, function(todos) {
      _todos = todos;
      TodoStore.changed();
    });
  },

  find: function(id) {
    return _todos.find(function(todo){
      return todo.id === id;
    });
  },

  create: function(todo) {
    $.post('api/todos', {todo: todo}, function(todo) {
      _todos.push(todo);
      TodoStore.changed();
    });
  },

  destroy: function(id) {
    var todo = TodoStore.find(id);

    if (todo !== 'undefined') {
      $.ajax({
        type: 'DELETE',
        url: 'api/todos/' + id,
        data: {},
        success: function(todo) {
          var idx = _todos.indexOf(todo);
          _todos.splice(idx, 1);
          TodoStore.changed();
        }
      });
    }
  },

  toggleDone: function(id) {
    var todo = TodoStore.find(id);

    $.ajax({
      type: 'PATCH',
      url: 'api/todos/' + id,
      data: {todo: {done: !todo.done}},
      success: function() {
        todo.done = !todo.done;
        TodoStore.changed();
      }
    });
  },

  changed: function() {
    _callbacks.forEach(function(cb){
      cb();
    });
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    var idx = _callbacks.indexOf(cb);
    _callbacks.splice(idx, 1);
  }

};


module.exports = TodoStore;

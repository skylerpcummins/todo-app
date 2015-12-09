var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function() {
    return { title: "", body: "" };
  },

  updateTitle: function(e) {
    this.setState({title: e.target.value});
  },

  updateBody: function(e) {
    this.setState({body: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    TodoStore.create({title: this.state.title,
                      body: this.state.body, done: false});
    this.setState({title: "", body: ""});
  },

  render: function() {
    var title = this.state.title;
    var body = this.state.body;

    return (
      <form onSubmit={this.handleSubmit}>
        Title: <input type="text" value={title}
                      onChange={this.updateTitle}></input>
      <br/>
        Body: <input type="text" value={body}
                     onChange={this.updateBody}></input>
      <br/>
        <input type="submit" value="New Todo"/>
      </form>
    );
  }
});

module.exports = TodoForm;

var React = require('react');
var DoneButton = require('./done_button');
var TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass({
  getInitialState: function() {
    return {clicked: false};
  },

  flipState: function() {
    this.setState({clicked: !this.state.clicked});
  },

  render: function() {
    if (this.state.clicked) {
      var detailedView =
        <div>
          <TodoDetailView todoItem={this.props.todoItem}/>
        </div>;
    } else {
      var detailedView = <div></div>;
    }

    return (
      <div>
        <div onClick={this.flipState}>{this.props.todoItem.title}</div>
        {detailedView}
        <DoneButton todoItem={this.props.todoItem} />
      </div>
    );
  }

});

module.exports = TodoListItem;

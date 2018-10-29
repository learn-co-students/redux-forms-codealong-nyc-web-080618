

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from "./Todo.js"

class TodosContainer extends Component {

  render() {
    console.log(this.props.todos)
    return(
      <div>
        {this.props.todos.map((todo, idx)=>{
          return <Todo key={idx} text={todo} />
        })}

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    todos:state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);

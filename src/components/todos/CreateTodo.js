import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state={text:''}
  handleChange=(e)=>{
    this.setState({text:e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    // this.props.addTodo(this.state.text)(1)
    // this.props.dispatch({ type: "ADD_TODO", payload: this.state.text })(2)
      this.props.addTodo(this.state.text)
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        <ol>
          {this.props.todos.map(todo=><li>{todo}</li>)}
        </ol>
      </div>
    );
  }
};

//   const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
//   }
// }(1)

const addTodo=(todo)=>{
  return {
     type: "ADD_TODO",
     payload: todo
  }
}

export default connect (state=>({todos:state.todos}),{addTodo})(CreateTodo);

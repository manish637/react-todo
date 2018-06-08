import React from 'react';
import { Todo } from './Todo';




export default class TodoList extends React.Component {
	render(){
	return(
  <div

    style={{ display: 'flex', flexDirection: 'column',
     marginBottom: '10px', marginRight: '5em',  }}
        
  >
    {this.props.todoItems.map((todo, index) => 
    
    	<Todo key={index} title={todo} 
    		   deleteTask = {this.props.deleteTask} 
               updateTask = {this.props.updateTask}
               updateFieldVal={this.props.updateFieldVal}
               attr={this.props.attr}
    	/>)
	}
  </div>

);
}}

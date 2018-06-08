import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

//const todoItems = ['Todo1', 'Todo2', 'Todo3'];



//Component to show Input Field to Update, props passed from Apps
const EditTask =(props)=>{
    return(
    <div ><input type="text" value={props.updatedText} onChange={props.updateTaskText}placeholder="Edit Task"  style={{width:'15em'}} />
          <button style={{marginLeft:'1em'}} className="btn btn-success" type="button" onClick={props.updateTask}>Update</button></div>
        );
    
}
 

//Main Component to show Application

class App extends Component {
constructor(){
  super();
  this.state = {
    text:'',
    todoItems : ['Todo1', 'Todo2', 'Todo3'],
    fieldVal : false,
    attr:'none',
    updatedText:'',
    warningText:false
  }
  
}
    

//Function to add new item in todoItems array
 addItem = () =>{
     var taskFound=1,i;
     this.setState({warningText:false})
     for(i=0;i<this.state.todoItems.length;i++){
         if(this.state.text===this.state.todoItems[i]){
             taskFound = 0;
             break;
         }
         else continue;
     }
 if(this.state.text!==''&& taskFound===1){
 this.setState(prevState =>({
  todoItems: prevState.todoItems.concat(this.state.text)
 }));

 }
     else{
         this.setState({warningText:true})
     }
     
       //console.log(this.state.todoItems);
  };

//Function to update the variable with onChange
  updateCurrentItem=(e)=>{
    this.setState({text : e.target.value})
   // console.log(this.state.text);
  };

//Function to delete task
  deleteTask = (a) =>{
//console.log(a+"deleting Task");
      this.setState(prevState =>({
          todoItems: prevState.todoItems.filter(title => title !== a)
      }))
  };

//Function to Update the updateVariable with onChange
updateTaskText = (e) =>{
    this.setState({updatedText:e.target.value})
    
}

//Function to Update task with new title using updatedText
updateTask=(e)=>{
      var taskFound=1,i,ind;
     for(i=0;i<this.state.todoItems.length;i++){
         if(this.state.updatedText===this.state.todoItems[i]){
             taskFound = 0;
             break;
         }
         else continue;
     }
    for(i=0;i<this.state.todoItems.length;i++){
         if(this.state.text===this.state.todoItems[i]&&taskFound===1){
             ind=i;
             break;
         }
         else{
         this.setState({warningText:false})
     }
        this.setState({text:''})
     
     }
  //  console.log(this.state.updatedText)
   let newarr = this.state.todoItems.slice()
   newarr[ind]=this.state.updatedText
   this.setState({todoItems:newarr})
   this.setState({fieldVal:false})
    
  
}

//Function to updateFieldValue to show when InputField needed
updateFieldVal = (e) =>{
    this.setState({fieldVal:true,text:e}) 
   // console.log(this.state.text);
}
                  
  render() {
    return (
      <div
        style={{
          height: '50vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop:'10em',
        }}> 
        <div style={{marginBottom:'3em'}}><h2>Add Task in the Todo List</h2></div>
        <div><div style={{marginBottom:'3em'}}>
          <input type="text" placeholder="Todo Item" value={this.state.text}  onChange={this.updateCurrentItem} style={{width:'25em'}} />
          <button style={{marginLeft:'1em'}} className="btn btn-info" type="button" onClick={this.addItem}>Add</button>
         {this.state.warningText?<p className="text-danger">This Task is already present</p>:null}  </div> 
        
        <TodoList todoItems={this.state.todoItems}
                  deleteTask={this.deleteTask}
                  updateTask={this.updateTask}
                  fieldVal={this.state.fieldVal}
                  attr={this.state.attr}
                  updateFieldVal={this.updateFieldVal}
                
                  ></TodoList>{this.state.fieldVal?<EditTask updateTaskText={this.updateTaskText}  warningText={this.state.warningText} updateText={this.state.updatedText} updateTask={this.updateTask}
                     />:null}
      </div></div>
    );
  }
}

export default App;

import React from 'react';
import Cross from './cross.png';
import Check from './check.png';
import Edit from './edit.png';

export const Todo = (props) => 
<div style={{border:'2px solid ', marginBottom:'1em',paddingLeft:'0.5em', paddingRight:'1em', paddingTop:'0.3em', backgroundColor:"#ccff90"}}>
    <h2 id='titleHead'>
        {props.title}
    

    <div style={{position:'relative',display:'inline-block', float:'right',
        marginLeft:'5em'}}>
                <img src={Check} alt="Check" onClick={props.changeColor} style=    {{cursor:'pointer',display:'none' }}></img>
                 <img src={Edit} alt="Edit" onClick={props.updateFieldVal.bind(this,(props.title))} style={{cursor:'pointer',marginLeft:'0.5em'}}  />
                 <img src={Cross} alt="Cross" onClick={props.deleteTask.bind(this,(props.title))} style={{cursor:'pointer',marginLeft:'0.5em'}}  ></img>
                 
   
    </div>
    </h2>
</div>;
                 
                 
                 
                     
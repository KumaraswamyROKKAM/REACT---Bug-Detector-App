import React, {  useReducer, useState } from 'react'
import TicketForm from './TicketForm';
import ticketReducer from './Redux/ticketReducer';
import TicketInfo from './TicketInfo';
import SortComponent from './SortComponent';

 const  App = () =>
{
    const [isEdit,setIsEdit]=useState(false);
    const [editItem,setEditItem]=useState();


    const initialState = {
        tickets:[]
    }
    const [state,dispatch]=useReducer(ticketReducer,initialState)

    console.log(state.tickets)// this is printing in same order irrespective of changeing sorting 
    return(
        <>
        <div>
        <h1>
            
            <center>Bug Detector</center>
        </h1>
        <TicketForm  dispatch={dispatch} isEdit={isEdit} setIsEdit={setIsEdit} editItem={editItem} setEditItem={setEditItem} />
        <div>
             <SortComponent dispatch={dispatch}/>
             <h1><center>All Tickets </center></h1>
             
            {state.tickets.map((eachTicket) =>
            {
                const {id}=eachTicket;
                return(
                    <div key={id}>
                        <TicketInfo ticket={eachTicket} dispatch={dispatch}   isEdit={isEdit} setIsEdit={setIsEdit}   editItem={editItem} setEditItem={setEditItem}/>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
        
    
}

export default App;


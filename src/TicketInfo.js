import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import './ticketForm.css'
const TicketInfo = ({ticket,dispatch, isEdit,setIsEdit, editItem , setEditItem}) =>
{
    const {id,title,desc,priority}=ticket;

    const handleDelete = (id) =>
    {
        
        if(isEdit && editItem.id === id)
        setIsEdit(false)
        
        dispatch(
            {
                type:"DELETE_TICKET",
                payload: id
            }
        )
    }
    
    const handleEdit = (ticket) =>
    {
        setIsEdit(true);
        setEditItem(ticket);
        // dispatch({
        //     type:"UPDATE_TICKET",
        //     payload: ticket,
        // })
    }

    const priorityLevels = (priority) =>
    {
        if(priority == 1)
            return "low"
        else if(priority == 2)
            return "medium"
        else
            return "High"
    }

    return(
        
        <div key={id}>
           <div className={priorityLevels(priority)}>
             <h3>Title : {title}</h3>
            <h4>Description : {desc}</h4>
            <div className='ButtonSet'>
                <button onClick={() => handleEdit(ticket)}>EDIT</button>
                <button onClick={()=>handleDelete(id)}>DELETE</button>
            </div>
           </div>
            
             
        </div>
    )
}

export default TicketInfo;
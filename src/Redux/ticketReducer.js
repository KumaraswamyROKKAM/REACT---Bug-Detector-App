const ticketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TICKET":
      return {
        ...state,
        tickets: [...state.tickets,action.payload]
      
      };
    case "DELETE_TICKET":
      return{
        ...state,tickets: state.tickets.filter((eachTicket)=> eachTicket.id !== action.payload)
      }
    case "UPDATE_TICKET":
      return{
        ...state, tickets: state.tickets.map((eachTicket)=> eachTicket.id === action.payload.id ? action.payload : eachTicket)
         
      }
    case "SortTickets":{
      const sortedTickets = [...state.tickets].sort((a,b)=>
      {
        return action.payload === "LowToHigh" ? a.priority - b.priority : b.priority - a.priority;
      })

      return{
        ...state,
        tickets:sortedTickets
      }
    }
      
    default:
      return state;
  }
};

export default ticketReducer;

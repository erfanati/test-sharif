export const saveUsers = (id,name,Age) => ({
    type:'SAVE_USERS', 
    id:id,
    name:name,
    Age:Age
})
export const saveTickets = (ticketID,ticketNumber,startDate,expireDate,hours) => ({
    type:'SAVE_TICKETS', 
    ticketID:ticketID,
    ticketNumber:ticketNumber,
    startDate:startDate,
    expireDate:expireDate,
    hours:hours
})
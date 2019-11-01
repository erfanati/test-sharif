const initial = {
    users:[],
    tickets:[]
}
const test = (state = initial ,action ) => {
    switch (action.type) {
        case 'SAVE_USERS':
            return {
                ...state,
                users: [
                    {
                        id:action.id,
                        name:action.name,
                        Age:action.Age
                    },
                    ...state.users
                ]
            } 
        case 'SAVE_TICKETS':
            return {
                ...state,
                tickets: [
                    {
                        ticketID:action.ticketID,
                        ticketNumber:action.ticketNumber,
                        startDate:action.startDate,
                        expireDate:action.expireDate,
                        hours:action.hours
                    },
                    ...state.tickets
                ]
            }       
        default:
        return state
    }
}

export default test
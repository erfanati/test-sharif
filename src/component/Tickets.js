import React from 'react'
import axios from 'axios'
import {saveTickets} from '../action/test'
class Users extends React.Component {
    constructor(){
        super()
        this.state={
        }
    }   
    componentDidMount () {
        axios.get('http://5.201.185.69:8123/tickets')
        .then((response) => {
            response.data.map((item)=>{
                this.props.dispatch(saveTickets(item.ticketID,item.ticketNumber,item.startDate,item.expireDate,item.hours))
            })
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
    handleChange (){

    }
    render(){
        return(
            <div className='users'>
                {this.props.tickets.map((itemm) =>(
                    <>
                        <div>
                            <span>ticketID:{itemm.ticketID}</span>
                            <span>ticketNumber:{itemm.ticketNumber}</span>
                            <input placeholder={itemm.startDate+'-'+itemm.expireDate+''+itemm.hours}/>
                            <button>send</button>
                        </div>
                    </>
                ))}
            </div>
        )
    }
} 
export default Users ;
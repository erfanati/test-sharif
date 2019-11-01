import React from 'react'
import axios from 'axios'
import {saveUsers} from '../action/test'
class Users extends React.Component {
    constructor(){
        super()
        this.state={
        }
    }   
    componentDidMount () {
        axios.get('http://5.201.185.69:8123/users')
        .then((response) => {
            response.data.map((item)=>{
                this.props.dispatch(saveUsers(item.id,item.name,item.Age))
            })
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
    render(){
        console.log('dcgcgc',this.props.users)
        return(
            <div className='users'>
                {this.props.users.map((itemm) =>(
                    <>
                        <div>
                            <span>Name:{itemm.name}</span>
                            <span>Age:{itemm.Age}</span>
                            <span>ID:{itemm.id}</span>
                        </div>
                    </>
                ))}
            </div>
        )
    }
} 
export default Users ;

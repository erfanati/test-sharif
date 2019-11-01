import {connect} from 'react-redux'
import Tickets from '../component/Tickets'

const mapDispatchToProps = (dispatch) =>({
    dispatch : dispatch
})

const mapStateToProps = (state) => ({
    tickets:state.tickets
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
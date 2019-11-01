import {connect} from 'react-redux'
import Users from '../component/Users'

const mapDispatchToProps = (dispatch) =>({
    dispatch : dispatch
})

const mapStateToProps = (state) => ({
    users:state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
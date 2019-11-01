import React from 'react';
import UsersContainer from './container/UsersContainer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import test from './reducer/test';
import './App.css';
import TicketsContainer from './container/TicketsContainer'
const store = createStore(test)
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {/* <UsersContainer /> */}
        <TicketsContainer/>
      </Provider>
    )
  }  
}

export default App;

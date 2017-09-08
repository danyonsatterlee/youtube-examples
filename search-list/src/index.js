import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './container/list-container.js';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <ListContainer></ListContainer>
        )

    }
}
ReactDOM.render(<App />, document.getElementById('root'));


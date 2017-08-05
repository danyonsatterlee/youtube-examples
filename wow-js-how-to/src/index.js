import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from "./content.js"

class App extends React.Component{
    render(){
        return(
<Content></Content>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


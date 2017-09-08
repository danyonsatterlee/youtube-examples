import React from 'react';

class List extends React.Component{
    genList(){
        return this.props.dogs.map((item, index)=>{
            return(
                <li key={index}>{item}</li>
            )
        })
    }
    render(){
 
       
        return(
           <div className="wrapper">
               <input/>
               <ul>
                   {this.genList()}
               </ul>
           
           </div>
        )
    }
}

export default List;
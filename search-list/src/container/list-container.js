import React from 'react';
import autoBind from 'react-autobind';
import List from '../component/list.js';


let dogs=['Airedale Terrier', 'Beagle', 'Golden Retriever', 
 'Wire Haired Fox Terrier', 'Poodle', 'Canaan Dog', 'Cocker Spaniel', 
 'Great Dane','Kuvasz','Norwich Terrier', 'Shiba Inu','Whippet', 'Yorkipoo', 'Bull Dog', 'American Eskimo Dog', 'Australian Terrier', 'Basenji','Basset Hound', 'Bedlington Terrier', 'Bearded Collie', 'Bloodhound',
 'Cesky Terrier', 'Chinese Crested', 'Coton de Tulear', 'Chow Chow', 'Dalmatian', 'English Setter', 'English Toy Spaniel', 'French Bulldog', 'Finnish Spitz', 'Glen of Imaal Terrier',
 'Havanese', 'Jack Russell Terrier', 'Japanese Chin', 'Kerry Blue Terrier', 'Lakeland Terrier', 'Labradoodle', 'Labrador Retriever', 'Maltese Shih Tzu', 'Maltese Shih Tzu', 'Otterhound',
 'Peekapoo', 'Papillon'];
class ListContainer extends React.Component{
    constructor(){
        super();
        this.state={
            input:""
        }
        autoBind(this);
    }
  handleChange(event){
            this.setState({
                input:event.target.value
            });
        }
   
    render(){
        let filterDogs=dogs.filter(word =>{
          if(word.toLowerCase().indexOf(this.state.input.toLowerCase())!==-1){
              return true;
          }
        });
        return(
            <List dogs={filterDogs} input={this.state.input} handleChange={this.handleChange}></List>
        )
    }
}

export default ListContainer;
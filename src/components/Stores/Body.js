import React, { Component } from 'react';
import Row from './Row.js';

import data from '../../data/assignedStore.json'
import data2 from '../../data/brandDateData.json'

class Body extends Component {
  constructor(props){
    super(props)
    this.doSum =this.doSum.bind(this)
  }

  doSum(data, property){
    var values = []
    var suma = 0;
    data.map((obj, index)=>{
    for( var valor in obj[property] ) {
        if( obj[property].hasOwnProperty( valor ) ) {
          suma += parseFloat( obj[property][valor] );
        }
      }
      values.push(suma)
  })
  return values
};
  render(){
    return(
      <tbody>
      <th>
      { data.data.map(nameDetail =>{
        return (<Row peasants = {nameDetail.name} />);
        })
      }
      </th>
      <th>
      <Row sum = {this.doSum(data2,"peasants")} />
      </th>
      </tbody>
    )
  };
}
export default Body;

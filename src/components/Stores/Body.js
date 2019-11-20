import React, { Component } from 'react';
import Row from './Row.js';

import data from '../../data/assignedStore.json'
import data2 from '../../data/brandDateData.json'

class Body extends Component {
  constructor(props){
    super(props)
    this.doSum =this.doSum.bind(this)
    this. orderArray
  }
  // another function that will re arrange the json obje to name by id store. 
  // look at store name  push indentifier obje to new Array
  // look next store and push to new array
  doSum(prop1, prop2){
  console.log(prop1[prop2])
  //   var values = []
    var suma = 0;
    // data.map((obj, index)=>{
    for( var valor in prop1[prop2] ) {
        if( prop1[prop2].hasOwnProperty( valor ) ) {
          suma += parseFloat( prop1[prop2][valor] );
        }
      }
      // values.push(suma)
  // })
  // console.log(values)
  return suma
};
  render(){
    return(
      <tbody>
      <th>
      { data.data.map(nameDetail =>{
        return (<Row val = {nameDetail.name} />);
        })
      }
      </th>
      <th>
      { data2.map(x =>{
        // console.log(obj.peasants)
        return (<Row val = {this.doSum(x, "peasants")}/>);
        })
      }
      </th>
      <th>
      { data2.map(x =>{
        // console.log(obj.peasants)
        return (<Row val = {this.doSum(x, "items")} />);
        })
      }
      </th>
      </tbody>
    )
  };
}
export default Body;

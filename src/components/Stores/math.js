<tbody>
<th>
{
          data.data.map(nameDetail =>{
              return (
                  <Row


                  peasants = {nameDetail.name}


                  />
              );
          })
      }
</th>
<th>
{ data2.map((details, index)=>{

  var sum = 0;
for( var el in details.peasants ) {
  if( details.peasants.hasOwnProperty( el ) ) {
    sum += parseFloat( details.peasants[el] );
  }
}
return (
    <Row


    sum = {sum}


    />
);
})
}
</th>
</tbody

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
    data.map((obj, index)=>{
    var sum = 0;
    for( var el in obj.property ) {
      if( values.hasOwnProperty( el ) ) {
        sum += parseFloat( values[el] );
      }
    }
  }
  render(){
    let title = data.data.map(nameDetail =>{
        return (
          <tr> {nameDetail.name} </tr>
        );
    })

    return(
      <tbody>
      <th>
      { data.data.map(nameDetail =>{
        return (<Row peasants = {nameDetail.name} />);
          })
        }
      </th>
      <th>
      { data2.map((details, index)=>{
        var sum = 0;
        for( var el in details.peasants ) {
          if( details.peasants.hasOwnProperty( el ) ) {
            sum += parseFloat( details.peasants[el] );
        }
      }
      return (<Row sum = {sum} />);
        })
      }
      </th>
      </tbody>
    )
  };
}
export default Body;

import React, { Component} from 'react';

import data from '../../data/assignedStore.json'
import data2 from '../../data/brandDateData.json'

class Table extends Component {
  render(){

  const datos = data.data.map(nameDetail =>{
    return(
      <h1> {nameDetail.name} </h1>
    )
  })

  const datos2 = data2.map((details, index)=>{

    var sum = 0;
  for( var el in details.peasants ) {
    if( details.peasants.hasOwnProperty( el ) ) {
      sum += parseFloat( details.peasants[el] );
    }
  }
  console.log(sum);
  })
    return(
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Peasants</th>
        <th>Visitors</th>
        <th>Attraction</th>
        <th>Cabinet</th>
        <th>Tickets</th>
        <th>Persuasion</th>
        <th>Revenue</th>
        <th>AverageTicket</th>
        <th>Items</th>
        <th>ItemperTicket</th>
        <th>AveragePermanence</th>
      </tr>
      </thead>
      <tfoot>
      <tr>
        <th>Totales</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      </tfoot>
      <tbody>
      <tr>
        {datos}
      </tr>
      </tbody>
    </table>
    );
  };
};
export default Table;

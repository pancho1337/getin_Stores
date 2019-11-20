import React from 'react';

const Row = (props) => {
  console.log(typeof(props.sum));
  console.log('hey'+props.sum);
	return (
		<tr>
      <td>{props.peasants}</td>
      <td></td>
		</tr>
	);
}

export default Row;

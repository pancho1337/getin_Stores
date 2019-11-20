import React from 'react';

const Row = (props) => {
  // console.log(props)
	return (
		<tr>
      <td>{props.val}</td>
		</tr>
	);
}

export default Row;

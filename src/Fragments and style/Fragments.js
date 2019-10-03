import React, {Component, Fragment} from "react";

// const Columns = () => ([
// 		<td key="1">Hello</td>,
// 		<td key="2">World</td>
// ]);

const Columns = () => (
		<Fragment>
			<td>Hello</td>
			<td>World</td>
		</Fragment>
);

const Table = () => (
	<table>
		<tbody>
			<tr>
				<Columns />
			</tr>
		</tbody>
	</table>
);

export default Table;
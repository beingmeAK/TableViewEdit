// import React from "react";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";

// import TableHeader from "@material-ui/core/Table";
// import TableRow from "@material-ui/core/TableRow";
// import TableRowColumn from "@material-ui/core/Table";

// const row = (x, i, header) => (
//   <TableRow key={`tr-${i}`}>
//     {header.map((y, k) => (
//       <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
//     ))}
//   </TableRow>
// );

// export default ({ data, header }) => (
//   <Table>
//     <TableHeader>
//       <TableRow>
//         {header.map((x, i) => (
//           <TableHeaderColumn key={`thc-${i}`}>{x.name}</TableHeaderColumn>
//         ))}
//       </TableRow>
//     </TableHeader>
//     <TableBody>{data.map((x, i) => row(x, i, header))}</TableBody>
//   </Table>
// );

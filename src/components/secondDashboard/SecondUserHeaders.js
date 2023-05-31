import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const headCells = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "team",
    label: "Team",
  },
  {
    id: "strategy type",
    label: "Strategy Type",
  },
  {
    id: "strategy name",
    label: "Strategy Name",
  },
];

const SecondUserHeaders = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Select</TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center">
            {headCell.id}
          </TableCell>
        ))}
        <TableCell align="center">Abbreviation</TableCell>
        <TableCell align="center">Quantity</TableCell>
        <TableCell align="center">Instrument</TableCell>
        <TableCell align="center">MtoM</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default SecondUserHeaders;

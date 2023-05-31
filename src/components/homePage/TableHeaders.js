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

const TableHeaders = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center">
            {headCell.id}
          </TableCell>
        ))}
        <TableCell colSpan={2} align="center">
          Abbreviation
        </TableCell>
        <TableCell colSpan={2} align="center">
          Quantity
        </TableCell>
        <TableCell align="center">Instrument</TableCell>
        <TableCell align="center">MtoM</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center">Alloted</TableCell>
        <TableCell align="center">Executed</TableCell>
        <TableCell align="center">Alloted</TableCell>
        <TableCell align="center">Executed</TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;

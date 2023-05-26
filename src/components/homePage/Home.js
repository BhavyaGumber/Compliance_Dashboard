import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Id,
  Name,
  Team,
  Strategy_Type,
  Strategy_Name,
  Abbr,
  Quantity,
  MtoM
) {
  return {
    Id,
    Name,
    Team,
    Strategy_Type,
    Strategy_Name,
    Abbr,
    Quantity,
    MtoM,
  };
}

const BackEnd_Data = [
  {
    Name: "Ankit",
    Strategy_Type: "Discount",
    Strategy_Name: "DN_0.6%_15%_917_75sl",
    Abbr: "DN/7/917",
    Inst_Name: "Nifty",
    Quantity: 3600,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Discount",
    Strategy_Name: "DN_0.4%_15%_918_20sl",
    Abbr: "DNCOR4/3",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Straddle_Premium",
    Strategy_Name: "NP_30%_50%SL_920   ",
    Abbr: "SPN/2/920",
    Inst_Name: "Nifty",
    Quantity: 3600,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "B200_25%SL_922",
    Abbr: "SB/17/922",
    Inst_Name: "Banknifty",
    Quantity: 2400,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "N1.2%_25%SL_929",
    Abbr: "SN/96/929",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Discount",
    Strategy_Name: "DN_0.5%_15%_939_100sl",
    Abbr: "DN/1/939",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Discount",
    Strategy_Name: "DN_1%_15%_944_25sl",
    Abbr: "DN/2/944",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "B250_15%SL_944",
    Abbr: "SB/18/944",
    Inst_Name: "Banknifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Discount",
    Strategy_Name: "DN_1%_15%_944_30sl",
    Abbr: "DN/27/944",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "N0.9%_10%SL_959",
    Abbr: "SN/10/959",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "N0.4%_75%SL_1029",
    Abbr: "SNC2B/1",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Discount",
    Strategy_Name: "DN_0.8%_15%_1029_20sl",
    Abbr: "DN/29/1029",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "N0.9%_35%SL_1034",
    Abbr: "SN/12/1034",
    Inst_Name: "Nifty",
    Quantity: 2400,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "B1.2%_50%SL_1059",
    Abbr: "SB/25/1059",
    Inst_Name: "Banknifty",
    Quantity: 2900,
  },
  {
    Name: "Ankit",
    Strategy_Type: "Simple",
    Strategy_Name: "N0.8%_15%SL_1114",
    Abbr: "SN/13/1114",
    Inst_Name: "Nifty",
    Quantity: 1800,
  },
];

const rows = BackEnd_Data.map((ele, ind) => {
  return createData(
    ind + 1,
    ele.Name,
    ele.Name,
    ele.Strategy_Type,
    ele.Strategy_Name,
    ele.Abbr,
    ele.Quantity,
    ele.Inst_Name
  );
});

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

function EnhancedTableHead() {
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
}
function Home() {
  const [abbValue, setAbbValue] = React.useState();
  const [qtyValue, setQtyValue] = React.useState();
  const abrreviationChangeHandler = (e) => {
    setAbbValue(e.target.value);
  };
  const quantityChangeHandler = (e) => {
    setQtyValue(e.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, height: "65vh" }}>
        <TableContainer sx={{ height: "100%" }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead />
            <TableBody>
              {rows.map((rows) => {
                return (
                  <TableRow hover sx={{ cursor: "pointer" }}>
                    <TableCell
                      component="th"
                      scope="row"
                      padding="none"
                      align="center"
                    >
                      {rows.Id}
                    </TableCell>
                    <TableCell align="center">{rows.Name}</TableCell>
                    <TableCell align="center">{rows.Team}</TableCell>
                    <TableCell align="center">{rows.Strategy_Type}</TableCell>
                    <TableCell align="center">{rows.Strategy_Name}</TableCell>
                    <TableCell align="center">{rows.Abbr}</TableCell>
                    <TableCell align="center">
                      <input
                        style={{ width: "4.5rem" }}
                        value={abbValue}
                        onChange={abrreviationChangeHandler}
                        type="text"
                      />
                    </TableCell>
                    <TableCell align="center">{rows.Quantity}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <input
                        style={{ width: "4.5rem" }}
                        value={abbValue}
                        onChange={quantityChangeHandler}
                        type="text"
                      />
                    </TableCell>
                    <TableCell align="center">{rows.MtoM}</TableCell>
                    <TableCell align="center">{rows.MtoM}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableHeaders from "./TableHeaders";
import { useSelector } from "react-redux";
import axios from "axios";

const MainTable = () => {
  const [inputValues, setInputValues] = useState([]);
  const [data, setData] = useState([]);

  const BackEnd_Data = useSelector((state) => state.BackEnd_Data);

  useEffect(() => {
    axios
      .get(
        "https://dashboard-2d985-default-rtdb.firebaseio.com/BackEnd_Data/.json"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [BackEnd_Data]);
  console.log(data);

  const handleInputChange = (index, field, value) => {
    const updatedValues = [...inputValues];
    if (!updatedValues[index]) {
      updatedValues[index] = {};
    }
    updatedValues[index][field] = value;
    setInputValues(updatedValues);
  };
  const handleSubmit = () => {
    const isEmpty = inputValues.some((input) => {
      return !input || !input.Abbr || !input.Quantity;
    });

    if (isEmpty) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const submittedData = inputValues.map((input, index) => {
      return {
        Id: BackEnd_Data[index].Name,
        Alloted_Abbr: BackEnd_Data[index].Abbr,
        Executed_bbr: input?.Abbr,
        Alloted_Qty: BackEnd_Data[index].Quantity,
        Executed_Qty: input?.Quantity,
      };
    });
    console.log("Submitted Data:", submittedData);
    alert("successfully submitted");
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2, height: "62.3vh" }}>
          <TableContainer sx={{ height: "100%" }}>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="small"
            >
              <TableHeaders />
              <TableBody>
                {BackEnd_Data.map((row, index) => {
                  return (
                    <TableRow hover key={index} sx={{ cursor: "pointer" }}>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.Id}
                      </TableCell>
                      <TableCell align="center">{row.Name}</TableCell>
                      <TableCell align="center">{row.Team}</TableCell>
                      <TableCell align="center">{row.Strategy_Type}</TableCell>
                      <TableCell align="center">{row.Strategy_Name}</TableCell>
                      <TableCell align="center">{row.Abbr}</TableCell>
                      <TableCell align="center">
                        <input
                          style={{ width: "4.5rem" }}
                          value={inputValues[index]?.Abbr || ""}
                          onChange={(e) =>
                            handleInputChange(index, "Abbr", e.target.value)
                          }
                          type="text"
                        />
                      </TableCell>
                      <TableCell align="center">{row.Quantity}</TableCell>
                      <TableCell align="center">
                        <input
                          style={{ width: "4.5rem" }}
                          value={inputValues[index]?.Quantity || ""}
                          onChange={(e) =>
                            handleInputChange(index, "Quantity", e.target.value)
                          }
                          type="text"
                        />
                      </TableCell>
                      <TableCell align="center">{row.MtoM}</TableCell>
                      <TableCell align="center">{row.MtoM}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <Button
        sx={{
          float: "right",
          mr: 2,
        }}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
};

export default MainTable;

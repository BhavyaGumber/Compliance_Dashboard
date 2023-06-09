import React, { useState,useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableHeaders from "./TableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MainTable.css";
import { dataSliceActions } from "../../store/dataSlice";

const MainTable = () => {
  const [inputValues, setInputValues] = useState([]);
  const uId = localStorage.getItem("uId")
  const [currentUserData, setCurrentUserData] = useState([]);const dispatch = useDispatch()

  const mainTableData = useSelector(state=>state.MainTable_Data)
  console.log(mainTableData)
  const fetchDataHandler = () => {
    axios
      .post("/currentUser", { uId })
      .then((response) => {
        console.log(response)
        const data = response.data.userData[0].items;
        dispatch(dataSliceActions.addMainData(data));
      
      })
      .catch((error) => {
        alert("error");
      });
  };
  useEffect(() => {
    fetchDataHandler();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedValues = [...inputValues];
    if (!updatedValues[index]) {
      updatedValues[index] = {};
    }
    updatedValues[index][field] = value;
    setInputValues(updatedValues);
  };
  const handleSubmit = () => {
    if (inputValues.length < currentUserData.length) {
      alert("Please fill in the values");
      return;
    }

    const isEmpty = inputValues.some((input) => {
      return !input.MtoM;
    });

    if (isEmpty) {
      console.log(isEmpty);
      alert("Please fill in all fields before submitting.");
      return;
    } else {
      const submittedData = inputValues.map((input, index) => {
        return {
          Id: currentUserData[index].Name,
          Alloted_Abbr: currentUserData[index].Abbr,
          Executed_Abbr:
            input?.Abbr !== undefined ? input?.Abbr : currentUserData[index].Abbr,
          Alloted_Qty: currentUserData[index].Quantity,
          Executed_Qty:
            input?.Quantity !== undefined
              ? input?.Quantity
              : currentUserData[index].Quantity,
          MtoM: input?.MtoM,
        };
      });
      console.log("Submitted Data:", submittedData);
      alert("successfully submitted");
    }
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
                {mainTableData.map((row, index) => {
                  return (
                    <TableRow hover key={index} sx={{ cursor: "pointer" }}>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.team}</TableCell>
                      <TableCell align="center">{row.Strategy_Type}</TableCell>
                      <TableCell align="center">{row.Strategy_Name}</TableCell>
                      <TableCell align="center">{row.MtoM}</TableCell>
                      <TableCell align="center">{row.Abbr}</TableCell>
                      <TableCell align="center">
                        <input
                          style={{ width: "4.5rem" }}
                          value={
                            inputValues[index]?.Abbr !== undefined
                              ? inputValues[index]?.Abbr
                              : row.Abbr
                          }
                          onChange={(e) =>
                            handleInputChange(index, "Abbr", e.target.value.toUpperCase())
                          }
                          type="text"
                        />
                      </TableCell>
                      <TableCell align="center">{row.Quantity}</TableCell>
                      <TableCell align="center">
                        <input
                          style={{ width: "4.5rem" }}
                          value={
                            inputValues[index]?.Quantity !== undefined
                              ? inputValues[index]?.Quantity
                              : row.Quantity
                          }
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "Quantity",
                              e.target.value
                            )
                          }
                          type="number"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <input
                          style={{ width: "4.5rem" }}
                          value={inputValues[index]?.MtoM || ""}
                          onChange={(e) =>
                            handleInputChange(index, "MtoM", e.target.value)
                          }
                          type="number"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <div>
        <Link to={"/dashboard/dataTable"}>
          <Button
            sx={{
              ml: 2,
            }}
            variant="contained"
          >
            Fetch Data
          </Button>
        </Link>

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
      </div>
    </>
  );
};

export default MainTable;

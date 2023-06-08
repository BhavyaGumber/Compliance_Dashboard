import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SecondUserHeaders from "./SecondUserHeaders";
import { useSelector, useDispatch } from "react-redux";
import { dataSliceActions } from "../../store/dataSlice";


const SecondUserTable = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state=>state.userId)
  const { Second_Data, isVisible,selectedRows } = useSelector((state) => ({
    Second_Data: state.Second_Data,
    isVisible: state.isVisible,
    selectedRows:state.selectedRows
  }));

  const handleCheckboxChange = (event, row) => {
    const isChecked = event.target.checked;
    dispatch(dataSliceActions.checkBoxHandler({ isChecked, row }));
  };

  const addRowHandler = async () => {
    dispatch(dataSliceActions.addRows());
    try {
      await axios.post(`/api/data/${userId}`, { selectedRows });
      console.log('Selected rows saved successfully');
    } catch (error) {
      console.log('Error saving selected rows:', error);
    }

  };
  return (
    <>
      {isVisible && (
        <div>
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2, height: "50vh" }}>
              <TableContainer sx={{ height: "100%" }}>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size="small"
                >
                  <SecondUserHeaders />
                  <TableBody>
                    {Second_Data.map((row, ind) => {
                      return (
                        <TableRow key={ind} hover sx={{ cursor: "pointer" }}>
                          <TableCell>
                            <Checkbox
                              onChange={(event) =>
                                handleCheckboxChange(event, row)
                              }
                            />
                          </TableCell>
                          <TableCell align="center">{row.Id}</TableCell>
                          <TableCell align="center">{row.Name}</TableCell>
                          <TableCell align="center">{row.Team}</TableCell>
                          <TableCell align="center">
                            {row.Strategy_Type}
                          </TableCell>
                          <TableCell align="center">
                            {row.Strategy_Name}
                          </TableCell>
                          <TableCell align="center">{row.Abbr}</TableCell>
                          <TableCell align="center">{row.Quantity}</TableCell>
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
          <Fab
            onClick={addRowHandler}
            color="primary"
            aria-label="add"
            sx={{ float: "right", mb: 5, mr: 2 }}
          >
            <AddIcon />
          </Fab>
        </div>
      )}
    </>
  );
};

export default SecondUserTable;

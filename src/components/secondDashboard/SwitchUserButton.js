import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { dataSliceActions } from "../../store/dataSlice";

const SwitchUserButton = ({ userList }) => {
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.selectedValue);

  const handleChange = (event) => {
    dispatch(dataSliceActions.tableToggle(event.target.value));
  };

  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-filled-label">Add User</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={selectedValue}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>none</em>
        </MenuItem>
        {userList.map((user, index) => {
          return (
            <MenuItem key={index} value={user}>
              {user}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SwitchUserButton;

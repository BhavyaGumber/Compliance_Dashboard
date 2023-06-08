import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {dataSliceActions} from "../../store/dataSlice";
import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import Select from "@mui/material/Select";
import { useEffect,useRef } from "react";

const SwitchUserButton = () => {
  const [data,setData] = useState([]);
  const selectedValueRef = useRef("");

  const dispatch = useDispatch();
  // const selectedValue = useSelector((state) => state.selectedValue);

  const [options,setOptions] = useState([])
  useEffect(()=>{
    fetchOptions()
  },[])
 
const fetchOptions = ()=>{
  axios.get('/options').then((response)=>{
    const {options} = response.data;
    setOptions(options);
    console.log(options)

  }).catch((error)=>{
    console.log(error)
  })
}
  const handleFetchData = () => {
   const selectedValue = selectedValueRef.current
      console.log(selectedValue);
    axios
    .post('/fetch-data', { selectedValue })

    .then((response) => {
      const { data } = response.data;
      setData(data);
      console.log(data.items);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };

 
  const handleOptionChange = (event) => {
    
    const selectedValue = event.target.value;
    selectedValueRef.current = selectedValue;
    dispatch(dataSliceActions.tableToggle(selectedValue))
    
  };
  return (
    <FormControl
      variant="filled"
      sx={{ mt: 1, ml: 2, minWidth: 130}}
    >
      <InputLabel id="demo-simple-select-filled-label">Add Strategy</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
       value={selectedValueRef.current}
        onChange={handleOptionChange}
        onClick={handleFetchData}
       
      >
        <MenuItem value="">
          <em>none</em>
        </MenuItem>
        {options.map((option, index) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SwitchUserButton;

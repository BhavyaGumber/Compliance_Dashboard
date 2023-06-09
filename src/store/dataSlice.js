import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MainTable_Data:[],
  Absent_Data:[],
  
  selectedValue: "",
  isVisible: false,
  selectedRows: [],
  userId:null
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addMainData(state,action){
      state.MainTable_Data=action.payload
    },
    addAbsentData(state,action){
      state.Absent_Data=action.payload
    },
    tableToggle(state, action) {
      const value = action.payload;
      state.selectedValue = value;
      if (state.selectedValue === "") {
        state.isVisible = false;
      } else {
        state.isVisible = true;
      }
    },
    checkBoxHandler(state, action) {
      const isChecked = action.payload.isChecked;
      const row = action.payload.row;
      if (isChecked) {
        state.selectedRows = [...state.selectedRows, row];
      } else if (!isChecked) {
        state.selectedRows = state.selectedRows.filter(
          (selectedRows) => selectedRows.Abbr !== row.Abbr
        );
      }
    },
    addRows(state) {
      const updatedSelectedRows = state.selectedRows.map(
        (selectedRow, index) => {
          const correspondingRow = state.MainTable_Data[index];
          if (correspondingRow) {
            selectedRow.name = correspondingRow.name;
            selectedRow.team = correspondingRow.team;
            selectedRow.id = correspondingRow.id;
          }
          return selectedRow;
        }
      );

      state.MainTable_Data = state.MainTable_Data.concat(updatedSelectedRows);
      state.Absent_Data = state.Absent_Data.filter((row) => {
        return !updatedSelectedRows.some(
          (selectedRow) => selectedRow.Abbr === row.Abbr
        );
      });

      state.isVisible = false;
      state.selectedValue = "";
      state.selectedRows = [];
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      console.log(action.payload)
    },
  },
});

export const dataSliceActions = dataSlice.actions;
export default dataSlice.reducer;

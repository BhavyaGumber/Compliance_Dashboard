import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackEnd_Data: [
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
  ],
  Second_Data: [
    {
      Name: "Aviral",
      Strategy_Type: "Discount",
      Strategy_Name: "DN_0.6%_15%_917_75sl",
      Abbr: "DN/7/917",
      Inst_Name: "Nifty",
      Quantity: 3600,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Discount",
      Strategy_Name: "DN_0.4%_15%_918_20sl",
      Abbr: "DNCOR4/3",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Straddle_Premium",
      Strategy_Name: "NP_30%_50%SL_920   ",
      Abbr: "SPN/2/920",
      Inst_Name: "Nifty",
      Quantity: 3600,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "B200_25%SL_922",
      Abbr: "SB/17/922",
      Inst_Name: "Banknifty",
      Quantity: 2400,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "N1.2%_25%SL_929",
      Abbr: "SN/96/929",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Discount",
      Strategy_Name: "DN_0.5%_15%_939_100sl",
      Abbr: "DN/1/939",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Discount",
      Strategy_Name: "DN_1%_15%_944_25sl",
      Abbr: "DN/2/944",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "B250_15%SL_944",
      Abbr: "SB/18/944",
      Inst_Name: "Banknifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Discount",
      Strategy_Name: "DN_1%_15%_944_30sl",
      Abbr: "DN/27/944",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "N0.9%_10%SL_959",
      Abbr: "SN/10/959",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "N0.4%_75%SL_1029",
      Abbr: "SNC2B/1",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Discount",
      Strategy_Name: "DN_0.8%_15%_1029_20sl",
      Abbr: "DN/29/1029",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "N0.9%_35%SL_1034",
      Abbr: "SN/12/1034",
      Inst_Name: "Nifty",
      Quantity: 2400,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "B1.2%_50%SL_1059",
      Abbr: "SB/25/1059",
      Inst_Name: "Banknifty",
      Quantity: 2900,
    },
    {
      Name: "Aviral",
      Strategy_Type: "Simple",
      Strategy_Name: "N0.8%_15%SL_1114",
      Abbr: "SN/13/1114",
      Inst_Name: "Nifty",
      Quantity: 1800,
    },
  ],
  selectedValue: "",
  isVisible: false,
  selectedRows: [],
  userId:null
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
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
          const correspondingRow = state.BackEnd_Data[index];
          if (correspondingRow) {
            selectedRow.Name = correspondingRow.Name;
            // selectedRow.Team = correspondingRow.Team;
            // selectedRow.Id = correspondingRow.Id;
          }
          return selectedRow;
        }
      );

      state.BackEnd_Data = state.BackEnd_Data.concat(updatedSelectedRows);
      state.Second_Data = state.Second_Data.filter((row) => {
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

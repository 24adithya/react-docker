import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import AppContext from "./AppContext";

const AppContents = () => {
  // Get fetchData function from the context
  const { fetchData, data, loading } = useContext(AppContext);

  // State for input value
  const [inputName, setInputName] = useState("");

  // Handler for input value change
  const handleInputNameChange = (event) => {
    setInputName(event.target.value);
  };

  // Handler for button click to trigger data fetch
  const handleButtonClick = () => {
    // Call fetchData function
    fetchData(inputName);
  };

  return (
    <div>
      {/* Render your content using the 'data' state */}
      Enter your name:
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={inputName}
        onChange={handleInputNameChange}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Submit
      </Button>
      {data}
    </div>
  );
};

export default AppContents;

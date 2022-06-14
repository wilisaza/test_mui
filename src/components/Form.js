import React from "react";

import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Form({ formStruct }) {
  console.log(formStruct);
  return (
    <Box
      sx={{
        margin: "0 auto",
        height: formStruct.Window["-Height"] + "px",
        width: formStruct.Window["-Width"] + "px",
        backgroundColor: "#e3dcdc",
        border: "1px solid #565555",
      }}
    >
      <AppBar position="static">
        <Toolbar sx={{ minHeight: "100%" }}>
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
            {formStruct.Window["-Title"]}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Form;

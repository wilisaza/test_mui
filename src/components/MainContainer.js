import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import MainBar from "./MainBar";

function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/*<Container>*/}
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <MainBar />
      </Box>
      {/*</Container>*/}
    </React.Fragment>
  );
}

export default MainContainer;

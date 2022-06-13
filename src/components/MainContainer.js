import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import MainBar from "./MainBar";
import MainTest from "./MainTest";

function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/*<Container>*/}
      <Box sx={{ height: "100vh" }}>
        <MainTest />
      </Box>
      {/*</Container>*/}
    </React.Fragment>
  );
}

export default MainContainer;

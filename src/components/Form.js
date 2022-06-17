import React from "react";

import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToAppOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStatsOutlined";
import SearchOffIcon from "@mui/icons-material/SearchOffOutlined";
import AddIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/RemoveOutlined";
import Tooltip from "@mui/material/Tooltip";

import Divider from "@mui/material/Divider";

import FormBlock from "./FormBlock";
import FormGrid from "./FormGrid";

let factorSize = 1;
let factorDisplay = 1.4;

function Form({ formStruct }) {
  //console.log(formStruct);
  let wHeight = parseInt(formStruct.Window["-Height"]);
  let wWidth = parseInt(formStruct.Window["-Width"]);
  return (
    <Container>
      <Box
        key="mainBox"
        sx={{
          //margin: "0 auto",
          //height: wHeight * factorDisplay + 60 + "px",
          //width: wWidth * factorDisplay + "px",
          height: "80vh",
          backgroundColor: "#e3dcdc",
          border: "1px solid #565555",
          borderRadius: 2,
        }}
      >
        {/*<AppBar position="static">
        <Toolbar sx={{ minHeight: "100%" }}>
          <IconButton color="inherit">
            <SaveIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
    </AppBar>*/}
        <Box
          id="toolBox"
          sx={{
            display: "flex",
            //alignItems: "center",
            width: "fit-content",

            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            bgcolor: "#c1c6ef",
            color: "text.secondary",
            "& svg": {
              m: 1.5,
            },
            "& hr": {
              mx: 0.5,
            },
          }}
        >
          <Tooltip title="Guardar">
            <IconButton size="small" color="warning">
              <SaveIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Salir">
            <IconButton size="small" color="secondary">
              <ExitToAppIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem />
          <Tooltip title="Introducir Consulta">
            <IconButton size="small">
              <SearchIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Ejecutar Consulta">
            <IconButton size="small">
              <QueryStatsIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancelar Consulta">
            <IconButton size="small">
              <SearchOffIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem />
          <Tooltip title="Insertar Registro">
            <IconButton size="small" color="success">
              <AddIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar Registro">
            <IconButton size="small" color="error">
              <RemoveIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          id="formBox"
          sx={{
            margin: "0 auto",
            marginTop: "5px",
            //height: wHeight * factorSize + 60 + "px",
            height: "auto",
            //overflow: "auto",
            //maxHeight: wHeight * factorSize + 60 + "px",
            minHeight: wHeight * factorSize + 60 + "px",
            width: wWidth * factorSize + "px",
            backgroundColor: "#dde1e7",
            border: "1px solid #565555",
            borderRadius: 1,
          }}
        >
          {/*<AppBar position="static">
            <Toolbar sx={{ minHeight: "100%" }}>
              <Typography
                variant="caption"
                //component="div"
                //sx={{ flexGrow: 1 }}
              >
                {formStruct.Window["-Title"]}
              </Typography>
            </Toolbar>
        </AppBar>*/}
          <Typography variant="caption">
            <Box
              id="titleBox"
              sx={{
                backgroundColor: "#1976d2",
                color: "#ffffff",
                marginBottom: "10px",
                paddingLeft: "5px",
              }}
            >
              {formStruct.Window["-Title"]}
            </Box>
            <Box id="blockBox" padding="5px">
              {/*<FormBlock dataBlock={formStruct.Block} />*/}
              <FormGrid dataBlock={formStruct.Block} />
            </Box>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Form;

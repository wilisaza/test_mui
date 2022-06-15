import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//////////////////////////////////////////////////////////////////////////////////////
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";

import Form from "./Form";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const formStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 500,
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 2,
  boxShadow: 2,
  p: 1,
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const form = {
  Block: {
    "-Name": "TIPO_ENTIDAD",
    "-RecordVisualAttributeGroupName": "REGISTRO_ACTIVO",
    "-ScrollbarTabPageName": "",
    "-QueryDataSourceName": "TIPO_ENTIDAD",
    "-DMLDataName": "TIPO_ENTIDAD",
    "-RecordsDisplayCount": "15",
    "-ScrollbarYPosition": "26",
    "-ShowScrollbar": "true",
    "-DirtyInfo": "true",
    "-ScrollbarCanvasName": "CANVAS2",
    "-WhereClause": "NIT_COMPANIA = :GLOBAL.COMPANIA",
    "-ScrollbarWidth": "11",
    "-ScrollbarXPosition": "553",
    "-OrderByClause": "TO_NUMBER(TIPO_ENTIDAD)",
    "-EnforcedPrimaryKey": "true",
    "-ScrollbarLength": "225",
    "-LockMode": "Delayed",
    Item: [
      {
        "-Name": "TIPO_ENTIDAD",
        "-UpdateAllowed": "true",
        "-MaximumLength": "4",
        "-YPosition": "27",
        "-XPosition": "10",
        "-ListElementCount": "2",
        "-DataType": "Number",
        "-ItemsDisplay": "0",
        "-ItemType": "Text Item",
        "-Prompt": "Tipo",
        "-TabPageName": "",
        "-PromptDisplayStyle": "First Record",
        "-DirtyInfo": "true",
        "-PromptAttachmentEdge": "Top",
        "-Width": "23",
        "-PromptAlign": "Center",
        "-PrimaryKey": "true",
        "-CanvasName": "CANVAS2",
        "-Height": "15",
        "-Required": "true",
        Trigger: {
          "-Name": "WHEN-VALIDATE-ITEM",
          "-TriggerText":
            "--&#10;-- Begin default enforce data integrity constraint SYS_C0014257 section&#10;--&#10;if not( :TIPO_ENTIDAD.TIPO_ENTIDAD IS NOT NULL ) then&#10;  message( 'WHEN-VALIDATE-ITEM trigger failed on field - ' || :system.trigger_field );&#10;  raise form_trigger_failure;&#10;end if;&#10;--&#10;-- End default enforce data integrity constraint SYS_C0014257 section&#10;--&#10;",
          "-self-closing": "true",
        },
      },
      {
        "-Name": "NOMBRE",
        "-MaximumLength": "60",
        "-YPosition": "27",
        "-XPosition": "33",
        "-ItemsDisplay": "0",
        "-ItemType": "Text Item",
        "-Prompt": "Nombre",
        "-TabPageName": "",
        "-PromptDisplayStyle": "First Record",
        "-DirtyInfo": "true",
        "-PromptAttachmentEdge": "Top",
        "-Width": "208",
        "-PromptAlign": "Center",
        "-CanvasName": "CANVAS2",
        "-DataLengthSemantics": "BYTE",
        "-Height": "15",
        "-Required": "true",
        Trigger: {
          "-Name": "WHEN-VALIDATE-ITEM",
          "-TriggerText":
            "--&#10;-- Begin default enforce data integrity constraint SYS_C0014258 section&#10;--&#10;if not( :TIPO_ENTIDAD.NOMBRE IS NOT NULL ) then&#10;  message( 'WHEN-VALIDATE-ITEM trigger failed on field - ' || :system.trigger_field );&#10;  raise form_trigger_failure;&#10;end if;&#10;--&#10;-- End default enforce data integrity constraint SYS_C0014258 section&#10;--&#10;",
          "-self-closing": "true",
        },
      },
      {
        "-Name": "TIPO_MANEJO",
        "-MaximumLength": "10",
        "-YPosition": "27",
        "-XPosition": "241",
        "-ListElementCount": "2",
        "-ItemType": "List Item",
        "-Prompt": "Tipo Manejo",
        "-TabPageName": "",
        "-PromptJustification": "Center",
        "-DirtyInfo": "true",
        "-PromptAttachmentEdge": "Top",
        "-Width": "74",
        "-ColumnName": "TIPO_MANEJO",
        "-PromptAlign": "Center",
        "-CanvasName": "CANVAS2",
        "-DataLengthSemantics": "BYTE",
        "-Height": "15",
        ListItemElement: [
          {
            "-Index": "1",
            "-Name": "Individual",
            "-Value": "INDIVIDUAL",
            "-self-closing": "true",
          },
          {
            "-Index": "2",
            "-Name": "General",
            "-Value": "GENERAL",
            "-self-closing": "true",
          },
        ],
      },
      {
        "-Name": "TERCERO",
        "-MaximumLength": "16",
        "-YPosition": "27",
        "-XPosition": "315",
        "-DataType": "Number",
        "-ValidateFromList": "true",
        "-ItemType": "Text Item",
        "-Prompt": "Tercero",
        "-TabPageName": "",
        "-PromptJustification": "Center",
        "-DirtyInfo": "true",
        "-PromptAttachmentEdge": "Top",
        "-Width": "68",
        "-ColumnName": "TERCERO",
        "-PromptAlign": "Center",
        "-CanvasName": "CANVAS2",
        "-LovName": "TERCEROS",
        "-Height": "15",
        Trigger: {
          "-Name": "POST-CHANGE",
          "-TriggerText":
            "BEGIN&#10;&#x9;SELECT  nombre||' '||apellido_1||' '||apellido_2 nombre&#10;&#x9;INTO :NOMBRE_TERCERO&#10;&#x9;FROM tercero&#10;&#x9;WHERE TERCERO = :TERCERO&#10;&#x9;&#x9;&#x9;&#x9;AND  nit_compania = :global.compania&#10;&#x9;&#x9;&#x9;&#x9;AND  TERCERO_TYPE = :TERCERO_TYPE;&#10;EXCEPTION&#10;&#x9;WHEN OTHERS THEN NULL;&#10;END;",
          "-DirtyInfo": "true",
          "-self-closing": "true",
        },
      },
      {
        "-Name": "TERCERO_TYPE",
        "-MaximumLength": "10",
        "-Prompt": "Tercero Type",
        "-DirtyInfo": "true",
        "-Width": "74",
        "-ColumnName": "TERCERO_TYPE",
        "-DataLengthSemantics": "BYTE",
        "-Height": "14",
        "-ItemType": "Text Item",
        "-self-closing": "true",
      },
      {
        "-Name": "NOMBRE_TERCERO",
        "-MaximumLength": "255",
        "-YPosition": "27",
        "-XPosition": "384",
        "-ItemType": "Display Item",
        "-Prompt": "Nombre",
        "-TabPageName": "",
        "-PromptJustification": "Center",
        "-DirtyInfo": "true",
        "-DatabaseItem": "false",
        "-PromptAttachmentEdge": "Top",
        "-Width": "165",
        "-PromptAlign": "Center",
        "-CanvasName": "CANVAS2",
        "-Height": "15",
        "-self-closing": "true",
      },
      {
        "-Name": "NIT_COMPANIA",
        "-MaximumLength": "15",
        "-Prompt": "Nit Compania",
        "-DirtyInfo": "true",
        "-Width": "108",
        "-ColumnName": "NIT_COMPANIA",
        "-DataLengthSemantics": "BYTE",
        "-Height": "14",
        "-ItemType": "Text Item",
        "-Required": "true",
        "-CopyValueFromItem": '"/',
        "-self-closing": "true",
      },
    ],
  },
  Window: {
    "-Name": "ROOT_WINDOW",
    "-DirtyInfo": "true",
    "-Width": "600",
    "-Title": "Tipos de Entidades",
    "-Height": "280",
    "-self-closing": "true",
  },
};

export default function MainTest() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState("1");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography>Menú</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="MUI">
              <TreeItem nodeId="8" label="index.js" />
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Drawer>
      <Main
        open={open}
        /*sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}*/
      >
        <DrawerHeader />
        <Form formStruct={form} />
      </Main>
    </Box>
  );
}

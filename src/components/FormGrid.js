import React, { useState, useEffect } from "react";
import DataGrid, {
  SelectColumn,
  TextEditor,
  SelectCellFormatter,
} from "react-data-grid";

import { keyExists } from "../functions/arrayFunctions";

/*const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
];*/

const rows = [
  { id: 0, title: "Example" },
  { id: 1, title: "Demo" },
];

function FormGrid({ dataBlock }) {
  const [columns, setColumns] = useState([]);

  const fillColumns = (arrayCols) => {
    let columns = [];
    let tempColumn = {};
    console.log("DataBlock", dataBlock);
    if (Array.isArray(dataBlock.Item)) {
      for (let item in dataBlock.Item) {
        if (keyExists(dataBlock.Item[item], "-CanvasName")) {
          tempColumn = {};
          tempColumn.key = dataBlock.Item[item]["-ColumnName"];
          tempColumn.name = dataBlock.Item[item]["-Prompt"];
          tempColumn.width = parseInt(dataBlock.Item[item]["-Width"]);
          tempColumn.resizable = false;
          tempColumn.editor = TextEditor;
          columns.push(tempColumn);
          console.log("COLS", columns);
        }
      }
      if (columns.length > 0) arrayCols(columns);
      else arrayCols([]);
    }
  };

  const cargaCols = () => {
    fillColumns(setColumns);
  };

  useEffect(() => {
    cargaCols();
  }, []);
  console.log("COLS", columns);
  return (
    <>
      <DataGrid columns={columns} rows={[]} />
    </>
  );
}

export default FormGrid;

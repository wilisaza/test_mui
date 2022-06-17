import React, { useState, useEffect } from "react";
import DataGrid from "react-data-grid";

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

  const fillColumns = () => {
    let columns = [];
    let tempColumn = {};
    console.log("DataBlock", dataBlock);
    if (dataBlock.Item.isArray()) {
      for (let item in dataBlock.Item) {
        if (keyExists(dataBlock.Item[item], "-CanvasName")) {
          tempColumn = {};
          tempColumn.key = dataBlock.Item[item]["-ColumnName"];
          tempColumn.name = dataBlock.Item[item]["-Prompt"];
          columns.push(tempColumn);
          console.log("COLS", columns);
        }
      }
      if (columns.length > 0) return columns;
      else return [];
    }
  };

  const cargaCols = () => {
    setColumns(fillColumns);
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

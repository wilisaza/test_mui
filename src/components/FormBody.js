import React from "react";

import Record from "./Record";

import { keyExists } from "../functions/arrayFunctions";

function FormBody({ dataBlock, data }) {
  //if(dataBlock.isArray()) //Se necesita evaluar si se envía un solo bloque o un array de ellos

  const BlockDef = () => {
    if (!Array.isArray(dataBlock)) {
      if (parseInt(dataBlock["-RecordsDisplayCount"]) > 1) {
        let rows = [];
        let tableHead = (
          <tr>
            {dataBlock &&
              dataBlock.Item.map((item) =>
                keyExists(item, "-CanvasName") ? (
                  <th>{item["-Prompt"]}</th>
                ) : (
                  <></>
                )
              )}
          </tr>
        );
        rows.push(tableHead);
        for (let i = 0; i < parseInt(dataBlock["-RecordsDisplayCount"]); i++) {
          rows.push(
            <Record dataBlock={dataBlock} index={i} displayLabel={false} />
          );
        }
        return <table style={{ borderCollapse: "collapse" }}>{rows}</table>;
      }
      return <Record dataBlock={dataBlock} index={0} displayLabel={true} />;
    }
  };

  return <BlockDef />;
}

export default FormBody;

/*<TextField
            size="small"
            id={item["-Name"]}
            label={item["-Prompt"]}
            sx={{
              width: parseInt(item["-Width"]) + "px",
              padding: 0,
              fontSize: "8px",
              bgcolor: "white",
              //height: parseInt(item["-Height"]) + "px",
            }}
          >
            {console.log(item["-Width"])}
          </TextField>*/

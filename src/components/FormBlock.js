import React from "react";

import { keyExists } from "../functions/arrayFunctions";

function FormBlock({ dataBlock }) {
  //if(dataBlock.isArray()) //Se necesita evaluar si se envía un solo bloque o un array de ellos

  const Rep = () => {
    let rows = [];
    for (let i = 0; i < parseInt(dataBlock["-RecordsDisplayCount"]); i++) {
      rows.push(
        <tr>
          {dataBlock &&
            dataBlock.Item.map((item) =>
              keyExists(item, "-CanvasName") ? (
                <td>
                  <input
                    key={item["-Name"] + "-" + i}
                    id={item["-Name"] + "-" + i}
                    type="text"
                    style={{
                      width: parseInt(item["-Width"]),
                      //height: parseInt(item["-Height"]),
                    }}
                  />
                </td>
              ) : (
                <></>
              )
            )}
        </tr>
      );
    }
    return rows;
  };

  return (
    <>
      <table style={{ borderCollapse: "collapse" }}>
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
        <Rep />
      </table>
    </>
  );
}

export default FormBlock;

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

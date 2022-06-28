import React, { useState, useEffect } from "react";

import Record from "./Record";

import { keyExists } from "../functions/arrayFunctions";

import orclFunctions from "../functions/orclApiFunctions";
import jsFunctions from "../functions/jsFunctions";

function FormBody({ formStruct, query, setQuery }) {
  //if(dataBlock.isArray()) //Se necesita evaluar si se envía un solo bloque o un array de ellos
  const [formData, setFormData] = useState([]);
  const [indexData, setIndexData] = useState(0);

  const extractData = (index) => {
    if (index < formData.length) {
      return formData[index];
    }
    return {};
  };

  const peticionGet = () => {
    //(urlObj, "GET", objetoDb, filtroObj, setFormData)
    orclFunctions.fetchApi(
      formStruct.Connection.bk_url,
      "GET",
      "tipo_entidad",
      "nit_compania=891480014",
      setFormData
    );
  };

  useEffect(() => {
    if (query) {
      peticionGet();
      setQuery(false);
    }
  }, [query]);

  const BlockDef = () => {
    let dataBlock = formStruct.Block;
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
        for (
          let i = 0;
          i <
          Math.max(
            parseInt(dataBlock["-RecordsDisplayCount"]),
            formData.length
          );
          i++
        ) {
          rows.push(
            <Record
              dataBlock={dataBlock}
              index={i}
              displayLabel={false}
              recordValue={extractData(i)}
            />
          );
        }
        return (
          <div
            className={dataBlock["-ScrollbarCanvasName"]}
            style={{ overflowY: "scroll", height: "450px" }}
          >
            <table style={{ borderCollapse: "collapse" }}>{rows}</table>
          </div>
        );
      }
      return (
        <Record
          dataBlock={dataBlock}
          index={0}
          displayLabel={true}
          recordValue={extractData(0)}
        />
      );
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

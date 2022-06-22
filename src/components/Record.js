import React from "react";

import Field from "./Field";

import { keyExists } from "../functions/arrayFunctions";

function Record({ dataBlock, index, displayLabel }) {
  const Rep = () => {
    let rows = displayLabel ? (
      <></>
    ) : (
      <tr>
        {dataBlock &&
          dataBlock.Item.map((item) =>
            keyExists(item, "-CanvasName") ? (
              <td>
                <Field item={item} index={index} />
              </td>
            ) : (
              <></>
            )
          )}
      </tr>
    );
    return rows;
  };

  return <Rep />;
}

export default Record;

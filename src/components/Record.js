import React from "react";

import Field from "./Field";

import { keyExists } from "../functions/arrayFunctions";

function Record({ dataBlock, index, displayLabel, recordValue }) {
  const Rep = () => {
    //console.log("RecordValue", recordValue);
    /* let rows = displayLabel ? (
      <></>
    ) : (
      <tr>
        {dataBlock &&
          dataBlock.Item.map((item) =>
            keyExists(item, "-CanvasName") ? (
              <td>
                <Field
                  item={item}
                  index={index}
                  fieldValue={recordValue[item["-Name"].toLowerCase()]}
                />
              </td>
            ) : (
              <></>
            )
          )}
      </tr>
    );
    return rows;*/
    let i;
    let rows = [];
    let { Item } = dataBlock;
    let item = {};
    if (displayLabel) {
      return <></>;
    } else {
      for (i = 0; i < Item.length; i++) {
        item = Item[i];
        if (keyExists(item, "-CanvasName")) {
          rows.push(
            <td>
              <Field
                item={item}
                index={index}
                fieldValue={recordValue[item["-Name"].toLowerCase()]}
              />
            </td>
          );
        }
        if (keyExists(item, "Trigger")) {
          //El campo tiene Triggers
          let trigger = item.Trigger;
          if (!Array.isArray(trigger)) {
            //Si trae un solo trigger
            switch (trigger["-Name"]) {
              case "POST-CHANGE":
                let triggerText = trigger["-TriggerText"];
                triggerText = triggerText.replace(/&#10;/g, "\n");
                triggerText = triggerText.replace(/&#x9;/g, "\t");
                console.log(triggerText);
                break;
              default:
                break;
            }
          }
        }
      }
      return <tr>{rows}</tr>;
    }
  };

  return <Rep />;
}

export default Record;

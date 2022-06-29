import React, { useState } from "react";

import Field from "./Field";

import { keyExists } from "../functions/arrayFunctions";

function Record({ dataBlock, index, displayLabel, recordValue }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(recordValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElementoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("Elemento", elementoSeleccionado);
  };

  const Rep = () => {
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
                nameField={item["-Name"].toLowerCase()}
                item={item}
                index={index}
                valueField={elementoSeleccionado[item["-Name"].toLowerCase()]}
                onChangeField={handleChange}
              />
            </td>
          );
        } /*
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
                //console.log(triggerText);
                break;
              default:
                break;
            }
          }
        }*/
      }
      return <tr>{rows}</tr>;
    }
  };

  return <Rep />;
}

export default Record;

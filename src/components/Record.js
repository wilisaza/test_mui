import React, { useState, useEffect } from "react";

import Field from "./Field";

import { keyExists } from "../functions/arrayFunctions";

function Record({ dataBlock, indexRecord, displayLabel, recordValue }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(recordValue);
  const [focused, setFocused] = useState(
    Array(dataBlock.Item.length).fill(false)
  );

  useEffect(() => {
    setFocus(1);
    console.log("Focused", focused);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElementoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("Elemento", elementoSeleccionado);
  };

  const setFocus = (index) => {
    if (index < 0) {
      setFocused([
        ...Array(index).fill(false),
        true,
        ...Array(dataBlock.Item.length - index - 1).fill(false),
      ]);
    }
  };

  const Rep = () => {
    let i;
    let rows = [];
    let { Item } = dataBlock;
    let item = {};
    if (displayLabel) {
      return <></>;
    } else {
      for (i = 0; i < focused.length; i++) {
        item = Item[i];
        if (keyExists(item, "-CanvasName")) {
          rows.push(
            <td>
              <Field
                nameField={item["-Name"].toLowerCase()}
                item={item}
                indexRecord={indexRecord}
                valueField={elementoSeleccionado[item["-Name"].toLowerCase()]}
                onChangeField={handleChange}
                focused={focused[i]}
                onFocusField={() => setFocus(i)}
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

import React from "react";

function Field({ nameField, item, index, valueField, onChangeField }) {
  const FieldType = () => {
    switch (item["-ItemType"]) {
      case "Text Item":
        return (
          <input
            name={nameField}
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            type="text"
            value={valueField}
            onChange={onChangeField}
            style={{
              width: parseInt(item["-Width"]),
              //height: parseInt(item["-Height"]),
            }}
          />
        );

      case "List Item":
        return (
          <select
            name={nameField}
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            onChange={onChangeField}
            style={{
              width: parseInt(item["-Width"]),
            }}
          >
            {item.ListItemElement.map((opt) =>
              opt["-Value"] === valueField ? (
                <option value={opt["-Value"]} selected>
                  {opt["-Name"]}
                </option>
              ) : (
                <option value={opt["-Value"]}>{opt["-Name"]}</option>
              )
            )}
          </select>
        );

      case "Display Item":
        return (
          <input
            name={nameField}
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            type="text"
            value={valueField}
            style={{
              width: parseInt(item["-Width"]),
              //height: parseInt(item["-Height"]),
            }}
          />
        );

      default:
        break;
    }
  };

  return <FieldType />;
}

export default Field;

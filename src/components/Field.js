import React from "react";

function Field({ item, index, fieldValue }) {
  const FieldType = () => {
    switch (item["-ItemType"]) {
      case "Text Item":
        return (
          <input
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            type="text"
            value={fieldValue}
            style={{
              width: parseInt(item["-Width"]),
              //height: parseInt(item["-Height"]),
            }}
          />
        );

      case "List Item":
        return (
          <select
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            name={item["-Name"] + "-" + index}
            style={{
              width: parseInt(item["-Width"]),
            }}
          >
            {item.ListItemElement.map((opt) =>
              opt["-Value"] === fieldValue ? (
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
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            type="text"
            value={fieldValue}
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

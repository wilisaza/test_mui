import React, { useEffect, useRef } from "react";

function Field({
  nameField,
  item,
  indexRecord,
  valueField,
  onChangeField,
  focused = false,
  onFocusField,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  });

  const FieldType = () => {
    switch (item["-ItemType"]) {
      case "Text Item":
        return (
          <input
            name={nameField}
            key={item["-Name"] + "-" + indexRecord}
            id={item["-Name"] + "-" + indexRecord}
            type="text"
            value={valueField}
            onChange={onChangeField}
            ref={inputRef}
            onFocus={onFocusField}
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
            key={item["-Name"] + "-" + indexRecord}
            id={item["-Name"] + "-" + indexRecord}
            onChange={onChangeField}
            ref={inputRef}
            onFocus={onFocusField}
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
            key={item["-Name"] + "-" + indexRecord}
            id={item["-Name"] + "-" + indexRecord}
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

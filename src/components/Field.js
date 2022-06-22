import React from "react";

function Field({ item, index }) {
  const FieldType = () => {
    switch (item["-ItemType"]) {
      case "Text Item":
        return (
          <input
            key={item["-Name"] + "-" + index}
            id={item["-Name"] + "-" + index}
            type="text"
            style={{
              width: parseInt(item["-Width"]),
              //height: parseInt(item["-Height"]),
            }}
          />
        );
        break;

      default:
        break;
    }
  };

  return <FieldType />;
}

export default Field;

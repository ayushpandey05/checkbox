import React from "react";
import { TouchableOpacity, Image } from "@hybrid/core-components";
import { Tick } from "@hybrid/icons";
import { runFunction } from "../../core-components/src/Utility";
const Checkbox = (props) => {
  const {
    size = 24,
    value,
    shape,
    tickColor,
    color = "grey",
    onChangeValue,
  } = props || {};
  const padding = Math.abs(size * 0.1);
  return (
    <TouchableOpacity
      key={`checkbox`}
      onPress={() => {
        runFunction(onChangeValue, !value);
      }}
      style={{
        width: size,
        height: size,
        padding,
        borderWidth: 2,
        borderColor: color,
        padding,
        backgroundColor: value ? color : "transparent",
        borderRadius: shape === "circular" ? size / 2 : 4,
      }}
    >
      {value ? (
        <Image
          style={{ width: "100%", height: "100%", color: tickColor }}
          source={Tick}
        />
      ) : (
        void 0
      )}
    </TouchableOpacity>
  );
};

export { Checkbox };

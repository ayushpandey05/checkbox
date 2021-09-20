import React from "react";
import { TouchableOpacity, Image } from "@react-easy-ui/core-components";
import { Tick } from "@react-easy-ui/icons";
import {runFunction} from '@react-easy-ui/utility-functions'
const Checkbox = (props) => {
  const {
    size = 24,
    value,
    shape,
    tickColor,
    color = "grey",
    style,
    onChangeValue,
  } = props || {};
  const padding = Math.ceil(size * 0.1);
  return (
    <TouchableOpacity
      key={`checkbox`}
      onPress={() => {
        runFunction(onChangeValue, !value);
      }}
      style={{
        ...style,
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

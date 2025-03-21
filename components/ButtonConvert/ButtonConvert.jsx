import React from "react";
import { s } from "./ButtonConvert.style";
import { Text, TouchableOpacity } from "react-native";

export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}

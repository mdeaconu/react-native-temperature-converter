import React from "react";
import { Text } from "react-native";
import { s } from "./DisplayTemperature.style";

export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={s.text}>
      {temperature} {unit}
    </Text>
  );
}

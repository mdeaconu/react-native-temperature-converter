import React from "react";
import { TextInput, Text, View } from "react-native";
import { s } from "./Input.style";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={3}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={onChange}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}

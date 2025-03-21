import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png"
import { Input } from "./components/Input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { UNITS, convertTemperatureTo, getOppositeUnit } from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("℃");
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  return (
    <ImageBackground style={s.backgroundImage} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              temperature={getConvertedTemperature()}
              unit={oppositeUnit}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert unit={currentUnit} onPress={() => setCurrentUnit(oppositeUnit)} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

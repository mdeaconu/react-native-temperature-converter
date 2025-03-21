import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { s } from "./App.style";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={s.root}>
                <Text>Hello</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

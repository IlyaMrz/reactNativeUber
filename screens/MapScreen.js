import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreen = () => {
    return (
        <View>
            <Map />
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    text: {
        color: "blue",
    },
});

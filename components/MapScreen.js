import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
    return (
        <SafeAreaView style={tw`bg-red-200 h-full`}>
            <Text style={styles.container}>Here is a map stuff..</Text>
            <Text>Here is a map stuff..,,,.</Text>
        </SafeAreaView>
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

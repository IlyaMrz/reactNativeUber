import React from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    StatusBar,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-red-200 h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
                    }}
                />
            </View>
            <GooglePlacesAutocomplete
                enablePoweredByContainer={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder="Where from? *same places API not enabled"
                styles={{
                    container: {
                        flex: 0,
                        marginLeft: 15,
                        marginRight: 15,
                    },
                    textInput: {
                        fontSize: 15,
                    },
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: "en",
                }}
                onPress={(data, details = null) => {
                    dispatch(
                        setOrigin({
                            loaction: details.geometry.location,
                            description: data.description,
                        })
                    );
                    dispatch(setDestination(null));
                }}
                minLength={2}
                fetchDetails={true}
                returnKeyType={"search"}
                onFail={(error) => console.error(error)}
            />
            <NavOptions />
            {/* <TouchableOpacity
                onPress={() => {
                    console.log("goooood             !!!"),
                    dispatch(
                        setOrigin({
                            location: { lat: 47.364874, lng: -121.811027 },
                            description: "Seattle suburb",
                        })
                        );
                    dispatch(setDestination(null));
                }}
                style={tw`m-5 p-2 content-center bg-blue-200 ml-4 w-24 rounded-lg`}
            >
                <Text>Fake Api Call</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    text: {
        color: "blue",
    },
});

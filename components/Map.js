import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
    const origin = useSelector(selectOrigin);
    // const destination = useSelector(selectDestination)
    // const mapRef = useRef(null)
    // const navigation = useNavigation()
    // const dispatch = useDispatch()
    return (
        <View>
            <MapView
                mapType="hybrid"
                style={styles.map}
                initialRegion={{
                    latitude: 47.369874,
                    longitude: -121.961027,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        height: Dimensions.get("window").height * 0.53,
    },
});

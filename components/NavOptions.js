import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "1",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen",
    },
    {
        id: "2",
        title: "Order food",
        image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.push(item.screen)}
                    style={tw`p-2 pl-6 pb-6 pt-4 bg-gray-200 ml-4 w-40 rounded-lg`}
                >
                    <View>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={tw`flex-row items-center mt-3`}>
                            <Text style={tw`text-lg font-bold text-black`}>{item.title}</Text>
                            <Icon
                                type="antdesign"
                                name="arrowright"
                                color="black"
                                size={22}
                                style={tw`ml-2`}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={{ flexGrow: 0 }}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
});

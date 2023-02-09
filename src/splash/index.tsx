import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ISlash {
    navigation: any,
}

const SplashScreen = ({ navigation }: ISlash) => {

    const onPress = () => {
        console.log("CLICK");
        navigation.navigate("Home")

    }

    return (
        <View style={styles.centered}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.title}>Splash Screen</Text>
                <Text style={styles.subtitle}>Using Flexbox</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffc2c2",
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
    },
    subtitle: {
        fontSize: 14,
        color: "#888",
    },
});

export default SplashScreen;
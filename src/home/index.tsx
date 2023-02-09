import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {

    const onPress = () => {
        console.log("CLICK");

    }

    return (
        <View style={styles.centered}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.subtitle}>Using Flexbox</Text>
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

export default HomeScreen;
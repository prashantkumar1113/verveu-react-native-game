import {StatusBar} from "expo-status-bar";
import {StyleSheet, ImageBackground} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <LinearGradient
            colors={["#4e0329", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <StartGameScreen />
            </ImageBackground>
            <StatusBar style="auto" />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});

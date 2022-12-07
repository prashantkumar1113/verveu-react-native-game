import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton({children, onPress}) {
    // function pressHandler() {
    //     console.log("Button pressed...");
    // }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonInnerContainter, styles.pressed]
                        : styles.buttonInnerContainter
                }
                onPress={onPress}
                android_ripple={{color: "#640233"}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainter: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});

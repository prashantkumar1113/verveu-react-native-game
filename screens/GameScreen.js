import {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

export default function GameScreen({userNumber}) {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userNumber)
    );
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text>Higher or Lower?</Text>
            <Text>+ - </Text>
            <Text>Log Rounds</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    },
});

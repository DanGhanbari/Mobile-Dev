import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryText: {
    fontSize: 24,
    color: "white",
    padding: 12,
  },
  highlight: {
    color: "red",
  },
});

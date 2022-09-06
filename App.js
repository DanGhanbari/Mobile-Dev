import { View, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import LinearGradient from "react-native-linear-gradient";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
  let screen = <StartGameScreen OnPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        setRoundsNumber={setGuessRounds}
        roundsNumber={guessRounds}
      />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <View style={styles.rootScreen}>
      <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.linear}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/dice.png")}
          resizeMode="cover"
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  linear: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.85,
  },
});

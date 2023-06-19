import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Vibration,
  Alert,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const Pomodoro = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(150);
  const [resetTimer, setResetTimer] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [isRestTimerStart, setIsRestTimerStart] = useState(false);
  const [restTimerDuration, setRestTimerDuration] = useState(1500000);
  const [resetRestTimer, setRestResetTimer] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>POMODORO</Text>
      <View style={styles.sectionStyle}>
        <Timer
          totalDuration={restTimerDuration}
          msecs
          start={isRestTimerStart}
          reset={resetRestTimer}
          options={options}
          handleFinish={() => {
            Vibration.vibrate(400, false);
            isRest
              ? Alert.alert("Timer Concluído! Voltemos ao trabalho!", "", [
                  {
                    text: "OK",
                    onPress: () => {
                      setRestTimerDuration(1500000);
                      setIsRestTimerStart(false);
                      setRestResetTimer(true);
                      setIsRest(false);
                    },
                  },
                ])
              : Alert.alert("Timer Concluído! Descanse um pouco!", "", [
                  {
                    text: "OK",
                    onPress: () => {
                      setRestTimerDuration(300000);
                      setIsRestTimerStart(false);
                      setRestResetTimer(true);
                      setIsRest(true);
                    },
                  },
                ]);
          }}
        />
        <TouchableHighlight
          onPress={() => {
            setIsRestTimerStart(!isRestTimerStart);
          }}
        >
          <Text style={styles.buttonText}>
            {!isRestTimerStart ? "Começar" : "Parar"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setIsRestTimerStart(false);
            setRestResetTimer(true);
          }}
        >
          <Text style={styles.buttonText}>Resetar</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Pomodoro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,
  },
  sectionStyle: {
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
    marginLeft: 7,
  },
};

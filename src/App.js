import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PlayScreen from './PlayScreen';

export default function App() {
  const [playMode, setPlayMode] = useState(false);
  return playMode ? (
    <PlayScreen />
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={styles.emoji}>✊ ✋ ✌️</Text>
      <View style={styles.btnContainer}>
        <Button onPress={() => {setPlayMode(true)}} title="Play" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    margin: 10,
  },
  emoji: {
    fontSize: 60,
  },
  btnContainer: {
    marginTop: 60,
    width: 240,
  },
});

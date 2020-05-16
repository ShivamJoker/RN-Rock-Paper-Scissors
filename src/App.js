import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';
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
        <Button
          onPress={() => {
            setPlayMode(true);
          }}
          title="Play"
        />
      </View>
      <Text
        style={styles.srcCode}
        onPress={() =>
          Linking.openURL(
            'https://github.com/ShivamJoker/RN-Rock-Paper-Scissors',
          )
        }>
        Source Code
      </Text>
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
  srcCode: {
    position: 'absolute',
    bottom: 20,
    color: '#0069c0',
    textDecorationLine: 'underline',
  },
});

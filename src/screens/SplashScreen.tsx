import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bag}>
        <View style={styles.handle} />
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080d02',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bag: {
    width: 66,
    height: 58,
    backgroundColor: '#a4ed2c',
    borderRadius: 10,
    position: 'relative',
  },

  handle: {
    position: 'absolute',
    width: 28,
    height: 18,
    borderWidth: 4,
    borderColor: '#a4ed2c',
    borderBottomWidth: 0,
    borderRadius: 20,
    top: -14,
    left: 19,
  },

  line: {
    position: 'absolute',
    width: 20,
    height: 3,
    backgroundColor: '#85c51d',
    borderRadius: 2,
    bottom: 10,
    left: 23,
  },
});
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'rgb(220, 64, 59)'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

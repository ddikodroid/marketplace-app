import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {size} from '../utils/size';
interface ICategoryCard {
  category_name: string;
  icon: string;
}

export function CategoryCard({category_name, icon}: ICategoryCard) {
  return (
    <Shadow containerViewStyle={styles.container} distance={5}>
      <View style={styles.view}>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text style={styles.text}>{category_name}</Text>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  view: {
    width: size(96),
    height: size(96),
    padding: size(8),
    borderRadius: size(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: size(48),
    width: size(48),
  },
  text: {
    fontSize: size(12),
    color: 'black',
    textAlign: 'center',
  },
});

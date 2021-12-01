import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {size} from '../utils/size';

interface IHomeSectionTitle {
  title: string;
  onPressSeeAll: () => void;
}

export function HomeSectionTitle({title, onPressSeeAll}: IHomeSectionTitle) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text onPress={onPressSeeAll} style={[styles.text, styles.seeAll]}>
        Lihat Semua
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: size(12),
  },
  text: {
    color: 'black',
    fontSize: size(14),
    fontWeight: 'bold',
    marginBottom: size(8),
  },
  seeAll: {
    color: 'rgb(220, 64, 59)',
  },
});

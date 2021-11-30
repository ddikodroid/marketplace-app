import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {images} from '../assets/images';
import {size} from '../utils/size';

export function LogoTitle() {
  return <Image source={images.logoHorizontal} style={styles.logoTitle} />;
}

const styles = StyleSheet.create({
  logoTitle: {
    height: size(32),
    width: size(132),
  },
});

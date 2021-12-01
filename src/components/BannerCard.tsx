import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import {size} from '../utils/size';

interface IBannerCard {
  img: string;
  bannerStyle?: StyleProp<ImageStyle>;
}

export function BannerCard({img, bannerStyle}: IBannerCard) {
  return (
    <Image
      source={{uri: img}}
      style={[styles.bannerImage, bannerStyle]}
      resizeMode="contain"
      borderRadius={size(4)}
    />
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: size(281),
    height: size(145),
  },
});

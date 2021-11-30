import {PixelRatio, Dimensions} from 'react-native';

const windowsWidth = Dimensions.get('window').width;

const ratio = windowsWidth / 360;

export function size(size: number): number {
  const newSize = size * ratio;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
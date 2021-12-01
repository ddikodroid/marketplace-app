import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {capitalizeFirstLetter} from '../utils/capitalizeFirstLetter';
import {convertToRupiah} from '../utils/convertToRupiah';
import {size} from '../utils/size';
interface IProductCard {
  product_name: string;
  normal_price: number;
  product_stock: number;
  image_uri: string;
  location: string;
  productCardStyle: StyleProp<ViewStyle>;
}

export function ProductCard({
  product_name,
  product_stock,
  normal_price,
  image_uri,
  location,
  productCardStyle,
}: IProductCard) {
  return (
    <Shadow
      distance={2.5}
      containerViewStyle={productCardStyle}
      viewStyle={styles.shadowView}>
      <View style={styles.container}>
        <Image source={{uri: image_uri}} style={styles.image} />
        <Text style={styles.name} numberOfLines={1}>
          {capitalizeFirstLetter(product_name)}
        </Text>
        <Text style={styles.price}>{convertToRupiah(normal_price)}</Text>
        <View style={styles.footer}>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.stock}>Stok: {product_stock}</Text>
        </View>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  image: {
    height: size(125),
    width: size(125),
    marginBottom: size(4),
    borderRadius: size(4),
  },
  shadowView: {
    padding: size(8),
  },
  container: {
    borderRadius: 4,
  },
  name: {
    color: 'black',
    fontSize: size(12),
    fontWeight: 'bold',
    width: size(125),
    marginBottom: size(2),
  },
  price: {
    color: 'rgb(220, 64, 59)',
    fontSize: size(12),
    fontWeight: 'bold',
    marginBottom: size(2),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    color: 'black',
    fontSize: size(12),
  },
  stock: {
    color: 'black',
    fontSize: size(12),
  },
});

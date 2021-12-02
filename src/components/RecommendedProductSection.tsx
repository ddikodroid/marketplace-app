import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {size} from '../utils/size';
import {HomeSectionTitle} from './HomeSectionTitle';
import ProductCard from './ProductCard';
// import {ProductCard} from './ProductCard';

export function RecommendedProductSection({data, onPressSeeAll}) {
  const renderProduct = ({item}) => (
    <ProductCard {...item} productCardStyle={styles.card} />
  );
  return (
    <View>
      <HomeSectionTitle
        title="Rekomendasi Produk"
        onPressSeeAll={onPressSeeAll}
      />
      <FlatList
        horizontal
        data={data.slice(0, 6)}
        renderItem={renderProduct}
        keyExtractor={(item, index) => `${item}-${index}`}
        overScrollMode="never"
        contentContainerStyle={styles.sectionContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: size(12),
    marginVertical: size(8),
  },
  sectionContainer: {
    paddingRight: size(12),
  },
});

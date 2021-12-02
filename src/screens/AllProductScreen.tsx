import React, {useCallback} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Loading} from '../components';
import ProductCard from '../components/ProductCard';
// import {ProductCard} from '../components';
import {useInfiniteProducts} from '../services/queries';
import {size} from '../utils/size';

export function AllProductScreen() {
  const {
    data: allProducts,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteProducts();

  const renderProduct = useCallback(
    ({item}) => {
      return <ProductCard {...item} productCardStyle={styles.card} />;
    },
    [allProducts],
  );
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={allProducts}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={item => item.image_name}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatlistView}
        onEndReached={
          !isFetchingNextPage && hasNextPage ? () => fetchNextPage() : null
        }
        ListFooterComponent={isFetchingNextPage ? <Loading /> : null}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  card: {
    marginHorizontal: size(16),
    marginVertical: size(8),
  },
  flatlistView: {
    width: '100%',
  },
  contentContainer: {
    alignSelf: 'center',
    paddingVertical: size(12),
  },
});

import React, {useState, useEffect} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {BASE_URL} from 'react-native-dotenv';
import {ProductCard} from '../components';
import {size} from '../utils/size';

export function AllProductScreen() {
  const [lastPage, setLastPage] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    let mounted = true;
    const getProducts = async () => {
      try {
        if (mounted) {
          const response = await fetch(
            `${BASE_URL}/product-recommendation?page=${page}`,
          );
          const results = await response.json();
          setLastPage(results.meta.total_page);
          setProducts([...products, ...results.data]);
        }
      } catch (error) {
        Alert.alert('Request Failed ' + error);
      }
    };
    getProducts();
    return () => (mounted = false);
  }, [page]);

  const loadMoreProduct = () => {
    if (page < lastPage) {
      setPage(prev => prev + 1);
    }
  };

  const renderProduct = ({item}) => {
    return <ProductCard {...item} productCardStyle={styles.card} />;
  };
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatlistView}
        onEndReached={loadMoreProduct}
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
    paddingVertical: size(8),
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
  },
});

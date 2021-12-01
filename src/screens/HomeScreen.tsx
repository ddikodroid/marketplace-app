import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import {
  BannerSection,
  CategorySection,
  RecommendedProductSection,
} from '../components';
import {useBanners, useCategories, useProducts} from '../services/queries';

export function HomeScreen() {
  const navigation = useNavigation();
  const {data: banners, isFetching: fetchingBanner} = useBanners();
  const {data: categories, isFetching: fetchingCategory} = useCategories();
  const {data: products, isFetching: fetchingProducts} = useProducts();

  if (fetchingBanner || fetchingCategory || fetchingProducts)
    return <Text>Loading...</Text>;
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <BannerSection data={banners.data} />
        <CategorySection
          data={categories.data}
          onPressSeeAll={() => navigation.navigate('allCategories')}
        />
        <RecommendedProductSection
          data={products.data}
          onPressSeeAll={() => navigation.navigate('allProduct')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 16,
  },
});

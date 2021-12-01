import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {BannerSection, CategorySection} from '../components';
import {useBanners, useCategories} from '../services/queries';

export function HomeScreen() {
  const navigation = useNavigation();
  const {data: banners, isFetching: fetchingBanner} = useBanners();
  const {data: categories, isFetching: fetchingCategory} = useCategories();

  if (fetchingBanner || fetchingCategory) return <Text>Loading...</Text>;
  return (
    <SafeAreaView style={styles.screen}>
      <BannerSection data={banners.data} />
      <CategorySection
        data={categories.data}
        onPressSeeAll={() => navigation.navigate('allCategories')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});

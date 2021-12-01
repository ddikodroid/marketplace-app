import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {useQuery} from 'react-query';
import {BannerSection} from '../components';
import {fetchBanners} from '../services/apis';

export function HomeScreen() {
  const {data: banners} = useQuery('banners', fetchBanners);
  console.log(banners);
  return (
    <SafeAreaView style={styles.screen}>
      <BannerSection data={banners.data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

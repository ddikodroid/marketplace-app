import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {BannerCard} from '.';
import {IBanner} from '../types/global';
import {size} from '../utils/size';

interface IBannerSection {
  data: IBanner[];
}

export function BannerSection({data}: IBannerSection) {
  const renderBanner = ({item}) => (
    <BannerCard img={item.url_mobile} bannerStyle={styles.banner} />
  );
  if (!data) {
    return <Text>Data Not Available</Text>;
  } else {
    return (
      <FlatList
        horizontal
        data={data}
        renderItem={renderBanner}
        snapToAlignment="start"
        snapToInterval={size(293)}
        decelerationRate="fast"
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sectionContainer}
      />
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    marginLeft: size(12),
    marginVertical: size(12),
  },
  sectionContainer: {
    paddingRight: size(12),
  },
});

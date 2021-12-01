import {BASE_URL} from 'react-native-dotenv';

export const fetchBanners = async () => {
  const res = await fetch(`${BASE_URL}/utility/home/banner-web`);
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch(
    `${BASE_URL}/utility/home/box-category?with_staple=true`,
  );
  return res.json();
};

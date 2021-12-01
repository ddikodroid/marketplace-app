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

export const fetchProduct = async () => {
  const res = await fetch(`${BASE_URL}/product-recommendation?page=1`);
  return res.json();
};

export const fetchProducts = async ({pageParam = 1}) => {
  const res = await fetch(
    `${BASE_URL}/product-recommendation?page=${pageParam}`,
  );
  const results = await res.json();
  return {results, nextPage: pageParam + 1};
};

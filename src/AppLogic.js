import React from "react";
import { useEffect, useState } from "react";
export const AppLogic = () => {
  const [dataProducts, setDataProducts] = useState({});
  const [indexCurrentProduct, setIndexCurrentProduct] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [amountProduct, setAmountProduct] = useState(0);
  let url = "/imgProduct.json";
  useEffect(() => {
    getImgsLocal();
  }, [indexCurrentProduct]);

  const getImgsLocal = async () => {
    const result = await fetch(url);
    const payload = await result.json();

    const { imgProducts, imgThumbnails } = payload;
    let _currentProduct = imgProducts[indexCurrentProduct];

    setDataProducts(payload);
    setCurrentProduct(_currentProduct);
  };

  const nextProduct = () => {
    let lastIndexProduct = dataProducts.imgProducts.length - 1;
    if (indexCurrentProduct === lastIndexProduct) return;
    setIndexCurrentProduct(indexCurrentProduct + 1);
  };
  const prevProduct = () => {
    let firtsIndexProduct = 0;
    if (indexCurrentProduct <= firtsIndexProduct) return;
    setIndexCurrentProduct(indexCurrentProduct - 1);
  };

  const changeProduct = (index) => {
    setIndexCurrentProduct(index);
  };

  const sumAmountProduct = () => {
    setAmountProduct(amountProduct + 1);
  };
  const resAmountProduct = () => {
    if (amountProduct <= 0) return;
    setAmountProduct(amountProduct - 1);
  };
  const addProductToCart = () => {
    console.log(`Haz añadido ${amountProduct} tenis al carrito`);
  };
  return {
    dataProducts,
    currentProduct,
    nextProduct,
    prevProduct,
    changeProduct,
    amountProduct,
    sumAmountProduct,
    resAmountProduct,
    addProductToCart,
  };
};

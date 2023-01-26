import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
export const useLogic = () => {
  const [indexCurrentProduct, setIndexCurrentProduct] = useState(0);
  const [amountProduct, setAmountProduct] = useState(0);
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [dataProducts, setDataProducts] = useState({});
  //? guardar en localstorage
  const [totalAmountCart, setTotalAmountCart] = useState(0);
  const [arrayProductCart, setArrayProductCart] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  let url = "/imgProduct.json";
  useEffect(() => {
    getImgsLocal();
  }, [indexCurrentProduct]);

  useEffect(() => {
    const itemsCart = getValueToLocaleStorage("productsCart");
    const amounstProductsInTheCart =
      getValueToLocaleStorage("amountProductsCart");

    if (itemsCart) {
      setArrayProductCart(itemsCart);
    }

    if (amounstProductsInTheCart) {
      setTotalAmountCart(amounstProductsInTheCart);
    }
  }, []);
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
    let objectCart = {
      id: uuidv4(),
      amountProduct,
      url: currentProduct.url,
      totalPrice: amountProduct * 125,
    };

    if (amountProduct === 0)
      return alert(
        `Seleciona la cantidad de productos que deseas agregar al carrito`
      );

    setTotalAmountCart(totalAmountCart + amountProduct);
    setArrayProductCart([...arrayProductCart, objectCart]);
    localStorage.setItem(
      "productsCart",
      JSON.stringify([...arrayProductCart, objectCart])
    );
    localStorage.setItem(
      "amountProductsCart",
      JSON.stringify(totalAmountCart + amountProduct)
    );
  };
  const deleteProductToCart = (id, amountProduct) => {
    let isAcepted = confirm("Are you sure delete product?");
    if (!isAcepted) return;

    let newArray = arrayProductCart.filter((product) => product.id !== id);

    setTotalAmountCart(totalAmountCart - amountProduct);
    setArrayProductCart(newArray);

    saveToLocalStorage("productsCart", newArray);
    saveToLocalStorage("amountProductsCart", totalAmountCart - amountProduct);
  };
  const showCart = () => {
    setIsVisibleCart(!isVisibleCart);
  };
  const showModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getValueToLocaleStorage = (key) =>
    JSON.parse(localStorage.getItem(key));

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
    isVisibleCart,
    showCart,
    arrayProductCart,
    totalAmountCart,
    deleteProductToCart,
    indexCurrentProduct,
    isVisibleModal,
    showModal,
  };
};

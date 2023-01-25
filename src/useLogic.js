import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
export const useLogic = () => {
  const [dataProducts, setDataProducts] = useState({});
  const [indexCurrentProduct, setIndexCurrentProduct] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [amountProduct, setAmountProduct] = useState(0);
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const [arrayProductCart, setArrayProductCart] = useState([]);
  const [totalAmountCart, setTotalAmountCart] = useState(0);

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
    let objectCart = {
      id: uuidv4(),
      amountProduct,
      url: currentProduct.url,
      totalPrice: amountProduct * 125,
    };

    if (amountProduct > 1) {
      alert(`agregaste ${amountProduct} productos al carrito`);
    }

    if (amountProduct === 1) {
      alert(`agregaste ${amountProduct} producto al carrito`);
    }

    if (amountProduct === 0)
      return alert(
        `Seleciona la cantidad de productos que deseas agregar al carrito`
      );

    setTotalAmountCart(totalAmountCart + amountProduct);
    setArrayProductCart([...arrayProductCart, objectCart]);
  };
  const deleteProductToCart = (id, amountProduct) => {
    let isAcepted = confirm("Estas seguro de eliminar este producto");
    if (!isAcepted) return;

    let newArray = arrayProductCart.filter((product) => product.id !== id);

    setTotalAmountCart(totalAmountCart - amountProduct);
    setArrayProductCart(newArray);
  };
  const showCart = () => {
    setIsVisibleCart(!isVisibleCart);
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
    isVisibleCart,
    showCart,
    arrayProductCart,
    totalAmountCart,
    deleteProductToCart,
  };
};

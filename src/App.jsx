import { CardCart } from "./components/CardCart/CardCart";

import { ContainerDetails } from "./components/ContainerDetails/ContainerDetails";
import { ContainerLayerAbsolute } from "./components/ContainerLayerAbsolute/ContainerLayerAbsolute";
import { ImagesItem } from "./components/ImagesItem/ImagesItem";
import { InfoProduct } from "./components/InfoProduct/InfoProduct";
import { ItemProductCart } from "./components/ItemProductCart/ItemProductCart";
import { MenuNavbar } from "./components/MenuNavbar/MenuNavbar";
import { useLogic } from "./useLogic";
import "./styles/global-styles.scss";
import { Carousel } from "./components/Carousel/Carousel";
import { Modal } from "./components/Modal/Modal";
function App() {
  const {
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
  } = useLogic();

  return (
    <section className="App container-fluid position-relative min-vh-100">
      <section className="container ">
        <header className="row">
          <section className="container">
            <div className="row p-0">
              <section className="col-12  p-0">
                <MenuNavbar
                  showCart={showCart}
                  totalAmountCart={totalAmountCart}
                />
              </section>
            </div>
          </section>
        </header>
      </section>
      <section className="container p-0 m-0">
        <main className="row mt-lg-4 position-relative">
          <ContainerDetails>
            <section className="col-12 col-lg-4 p-0 container-imgs-product ">
              <article className="container p-0 w-100   d-flex flex-lg-column justify-content-lg-center align-items-lg-center ">
                <section className="container-carousel mb-3">
                  {currentProduct ? (
                    <Carousel
                      currentProduct={currentProduct}
                      nextProduct={nextProduct}
                      prevProduct={prevProduct}
                      visibilityModal={showModal}
                    ></Carousel>
                  ) : null}
                </section>

                <section className="d-none d-lg-flex w-100 justify-content-lg-between gap-3">
                  {dataProducts.imgProducts
                    ? dataProducts.imgProducts.map((product, index) => (
                        <ImagesItem
                          key={product.id}
                          url={product.url}
                          currentIndex={index}
                          changeProduct={changeProduct}
                          isSelected={indexCurrentProduct === index}
                        ></ImagesItem>
                      ))
                    : null}
                </section>
              </article>
            </section>
            <section className="col-12 col-lg-6  d-flex justify-content-center py-lg-3 ">
              <InfoProduct
                amountProduct={amountProduct}
                sumAmountProduct={sumAmountProduct}
                resAmountProduct={resAmountProduct}
                addProductToCart={addProductToCart}
              ></InfoProduct>
            </section>
          </ContainerDetails>
          {isVisibleCart ? (
            <ContainerLayerAbsolute>
              <section className="mt-3 m-lg-0">
                <CardCart arrayProductCart={arrayProductCart}>
                  {arrayProductCart.length > 0 ? (
                    arrayProductCart.map((product) => (
                      <ItemProductCart
                        key={product.id}
                        product={product}
                        deleteProductToCart={deleteProductToCart}
                      ></ItemProductCart>
                    ))
                  ) : (
                    <div className="d-flex justify-content-center">
                      <p className="">Your cart is empty</p>
                    </div>
                  )}
                </CardCart>
              </section>
            </ContainerLayerAbsolute>
          ) : null}
        </main>
      </section>
      {isVisibleModal ? (
        <Modal>
          <section className="w-100 p-3">
            <article className=" w-100 d-flex justify-content-center">
              <section className="col-12 col-lg-4 p-0 container-imgs-product ">
                <article className="container p-0 w-100   d-flex flex-lg-column justify-content-lg-center align-items-lg-center ">
                  <section className="container-carousel mb-3">
                    <div className="d-flex justify-content-end mb-2">
                      <button
                        className="border-0 bg-transparent"
                        onClick={showModal}
                      >
                        <img src="/src/assets/images/icon-close.svg" alt="" />
                      </button>
                    </div>

                    {currentProduct ? (
                      <Carousel
                        currentProduct={currentProduct}
                        nextProduct={nextProduct}
                        prevProduct={prevProduct}
                        isVisibleModal={isVisibleModal}
                      ></Carousel>
                    ) : null}
                  </section>

                  <section className="d-none d-lg-flex w-100 justify-content-lg-between gap-3 px-4">
                    {dataProducts.imgProducts
                      ? dataProducts.imgProducts.map((product, index) => (
                          <ImagesItem
                            key={product.id}
                            url={product.url}
                            currentIndex={index}
                            changeProduct={changeProduct}
                            isSelected={indexCurrentProduct === index}
                          ></ImagesItem>
                        ))
                      : null}
                  </section>
                </article>
              </section>
            </article>
          </section>
        </Modal>
      ) : null}
    </section>
  );
}

export default App;

import { AppLogic } from "./AppLogic";
import { Carousel } from "./components/Carousel";
import { ContainerDetails } from "./components/ContainerDetails";
import { ImagesItem } from "./components/ImagesItem";
import { InfoProduct } from "./components/InfoProduct";
import { MenuNavbar } from "./components/MenuNavbar";
import "./styles/global-styles.scss";
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
  } = AppLogic();

  return (
    <section className="App container">
      <header className="row">
        <section className="container">
          <div className="row p-0">
            <section className="col-12  p-0">
              <MenuNavbar />
            </section>
          </div>
        </section>
      </header>
      <main className="row mt-lg-4">
        <ContainerDetails>
          <section className="col-12 col-lg-4 p-0 container-imgs-product ">
            <article className="container p-0 w-100   d-flex flex-lg-column justify-content-lg-center align-items-lg-center ">
              <section className="container-carousel mb-3">
                {currentProduct ? (
                  <Carousel
                    currentProduct={currentProduct}
                    nextProduct={nextProduct}
                    prevProduct={prevProduct}
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
                      ></ImagesItem>
                    ))
                  : null}
              </section>
            </article>
          </section>
          <section className="col-12 col-lg-6  d-flex justify-content-center py-lg-3">
            <InfoProduct
              amountProduct={amountProduct}
              sumAmountProduct={sumAmountProduct}
              resAmountProduct={resAmountProduct}
              addProductToCart={addProductToCart}
            ></InfoProduct>
          </section>
        </ContainerDetails>
      </main>
    </section>
  );
}

export default App;

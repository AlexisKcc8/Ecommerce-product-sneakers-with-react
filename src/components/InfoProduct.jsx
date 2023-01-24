import "../styles/components/style-info-product.scss";
import { CounterProduct } from "./CounterProduct";
import { DiscountPriceProduct } from "./DiscountPriceProduct";
import { IconCart } from "./IconCart";
import { MyButton } from "./MyButton";
export const InfoProduct = (props) => {
  const {
    amountProduct,
    sumAmountProduct,
    resAmountProduct,
    addProductToCart,
  } = props;
  return (
    <section className="my-product py-0 px-2">
      <span className="subtitle-product">SNEAKER COMPANY</span>
      <h2 className="fw-bold my-2 title-info-product">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-info-product ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-4">
        <DiscountPriceProduct></DiscountPriceProduct>
      </div>
      <section className="container">
        <article className="row p-0">
          <div className="col-12 mb-4 mb-lg-0 p-0 col-lg-6 ">
            <div style={{ height: "100%" }}>
              <CounterProduct
                amountProduct={amountProduct}
                sumAmountProduct={sumAmountProduct}
                resAmountProduct={resAmountProduct}
              ></CounterProduct>
            </div>
          </div>
          <div className="col-12 p-0 col-lg-6 ">
            <MyButton myEvent={addProductToCart}>
              <span className="me-2">
                <IconCart myFill={"#fff"}></IconCart>
              </span>{" "}
              Add to cart
            </MyButton>
          </div>
        </article>
      </section>
    </section>
  );
};

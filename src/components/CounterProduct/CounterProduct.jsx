import "./style-counter-product.scss";
export const CounterProduct = (props) => {
  const { amountProduct, sumAmountProduct, resAmountProduct } = props;
  return (
    <section
      className="d-flex justify-content-between justify-content-lg-around align-items-center"
      style={{ height: "100%" }}
    >
      <button
        className="my-button-counter d-flex justify-content-center align-items-center"
        onClick={resAmountProduct}
      >
        <img
          className="w-100"
          src="/src/assets/images/icon-minus.svg"
          alt="button-plus"
        />
      </button>
      <h3 className="p-0 m-0 fw-bold ">{amountProduct}</h3>
      <button
        className="my-button-counter d-flex justify-content-center align-items-center"
        onClick={sumAmountProduct}
      >
        <img
          className="w-100"
          src="/src/assets/images/icon-plus.svg"
          alt="button-plus"
        />
      </button>
    </section>
  );
};

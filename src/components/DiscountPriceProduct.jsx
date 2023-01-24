import "../styles/components/style-discount-price-product.scss";
export const DiscountPriceProduct = () => {
  return (
    <section className="d-flex flex-lg-column">
      <div className="w-50 d-flex justify-content-start align-items-center  text-center">
        <h2 className="m-0 fw-bold">$125.00</h2>
        <span className="fw-bold ms-3 discount-percentaje">50%</span>
      </div>
      <div className="w-50 d-flex justify-content-end align-items-center justify-content-lg-start">
        <span className="discount-money">$250.00</span>
      </div>
    </section>
  );
};

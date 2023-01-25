import "./style-ItemProductCart.scss";
export const ItemProductCart = (props) => {
  const { product, deleteProductToCart } = props;
  const { id, amountProduct, url, totalPrice } = product;

  return (
    <div className="container  p-1">
      <section className="row  mx-0">
        <div className="col-3 ">
          <img className="w-100 h-100 " src={url} alt="" />
        </div>
        <article className="col-8   p-0">
          <p className="card-text">
            Fall Limited Edition Sneakers <br /> $125.00 * {amountProduct}{" "}
            <strong>${totalPrice}</strong>
          </p>
        </article>
        <article className="col-1 p-0">
          <button
            className="w-100 h-100 btn-delete-item-product"
            onClick={() => deleteProductToCart(id, amountProduct)}
          >
            <img src="/src/assets/images/icon-delete.svg" alt="" />
          </button>
        </article>
      </section>
    </div>
  );
};

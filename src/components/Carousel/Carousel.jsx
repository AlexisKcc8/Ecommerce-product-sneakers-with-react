import { useEffect } from "react";
import "./style-carousel.scss";
export const Carousel = (props) => {
  const {
    currentProduct,
    nextProduct,
    prevProduct,
    visibilityModal,
    isVisibleModal,
  } = props;

  const showButtonLeftModal = isVisibleModal
    ? "position-left-button"
    : "start-0 ms-3 d-lg-none";
  const showButtonRightModal = isVisibleModal
    ? "position-right-button"
    : "end-0 me-3 d-lg-none";

  return (
    <div id="carouselExample" className="carousel slide  position-relative ">
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src={currentProduct.url}
            className="d-block img-carousel"
            style={{ width: "100%", height: "100%" }}
            alt="..."
            onClick={visibilityModal}
          />
        </div>
      </div>

      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={prevProduct}
        className={`position-absolute top-50 translate-middle-y  my-button-carousel  ${showButtonLeftModal}`}
      >
        <img
          className="p-0 m-0"
          src="/src/assets/images/icon-previous.svg"
          alt="previous-product"
        />
      </button>
      <button
        className={`position-absolute top-50 translate-middle-y ms-2 my-button-carousel  ${showButtonRightModal}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={nextProduct}
      >
        <img
          className="p-0 m-0"
          src="/src/assets/images/icon-next.svg"
          alt="button-next-product"
        />
      </button>
    </div>
  );
};

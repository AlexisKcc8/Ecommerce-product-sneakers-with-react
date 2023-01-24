import React from "react";
import "../styles/components/style-carousel.scss";
export const Carousel = (props) => {
  const { currentProduct, nextProduct, prevProduct } = props;
  return (
    <div id="carouselExample" className="carousel slide  position-relative">
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src={currentProduct.url}
            className="d-block"
            style={{ width: "100%", height: "100%" }}
            alt="..."
          />
        </div>
      </div>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={prevProduct}
        className="position-absolute top-50 start-0 translate-middle-y ms-2 my-button-carousel d-lg-none"
      >
        <img
          className="p-0 m-0"
          src="/src/assets/images/icon-previous.svg"
          alt="previous-product"
        />
      </button>
      <button
        className="position-absolute top-50 end-0 translate-middle-y me-2 my-button-carousel d-lg-none"
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

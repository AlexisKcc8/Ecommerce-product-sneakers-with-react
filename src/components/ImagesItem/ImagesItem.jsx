import "./style-images-item.scss";
export const ImagesItem = (props) => {
  const { url, currentIndex, changeProduct, isSelected } = props;
  const className = `container-img__img ${
    isSelected ? "container-img__img-selected" : ""
  }`;
  return (
    <section className="container-img">
      <img
        onClick={() => changeProduct(currentIndex)}
        className={className}
        src={url}
        alt=""
      />
      {isSelected ? (
        <div className="container-img__layer-selected"></div>
      ) : null}
    </section>
  );
};

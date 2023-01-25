import "./style-images-item.scss";
export const ImagesItem = (props) => {
  const { url, currentIndex, changeProduct } = props;
  return (
    <section className="container-img">
      <img
        onClick={() => changeProduct(currentIndex)}
        className="container-img__img"
        src={url}
        alt=""
      />
    </section>
  );
};

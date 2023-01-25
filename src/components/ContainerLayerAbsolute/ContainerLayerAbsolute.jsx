import "./style-container-layer-absolute.scss";
export const ContainerLayerAbsolute = ({ children }) => {
  return (
    <section className="container-layer-absolute d-flex justify-content-lg-end p-lg-0">
      {children}
    </section>
  );
};

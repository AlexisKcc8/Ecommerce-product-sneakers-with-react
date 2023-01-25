export const ContainerDetails = ({ children }) => {
  return (
    <section className="container">
      <article className="row  d-flex justify-content-lg-center">
        {children}
      </article>
    </section>
  );
};

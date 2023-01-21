import { useEffect, useState } from "react";
import { MenuNavbar } from "./components/MenuNavbar";
import { NabvarMenu } from "./components/NabvarMenu";

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    getImgsLocal();
  }, []);

  const getImgsLocal = async () => {
    const result = await fetch("/imgProduct.json");
    const payload = await result.json();
    setDataProducts(payload);
  };

  return (
    <section className="App container">
      <header className="row">
        <section className="col-12 bg-white">
          <MenuNavbar />
        </section>
      </header>
      <main>aqui va lo demas</main>
      {/* {dataProducts.products.map((product) => (
        <img
          key={product.id}
          src={product.url}
          style={{ width: "10rem" }}
          className="card-img-top"
          alt="..."
        ></img>
      ))} */}
    </section>
  );
}

export default App;

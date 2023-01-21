import { ItemMenuNavbar } from "./ItemMenuNavbar";
import "../styles/components/style-menu-navbar.scss";
export const MenuNavbar = () => {
  return (
    <nav className="container-navbar navbar navbar-expand-lg py-2 ">
      <div className="container-fluid p-0 m-0  d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="p-0 m-0 "
                src="/src/assets/images/icon-menu.svg"
                alt="menú"
              />
            </div>
          </button>
          <h2 className="title-sneakers me-lg-5">sneakers</h2>
        </div>
        {/* contenido del menu */}
        <div
          className="offcanvas offcanvas-start "
          tabIndex={-1}
          style={{ width: "50%" }}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="bg-white border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "100%" }}
              >
                <img src="/src/assets/images/icon-close.svg" alt="menú-close" />
              </div>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav d-flex justify-content-start align-items-lg-center flex-grow-1 p-0">
              <ItemMenuNavbar
                className="nav-link my-0 mx-2"
                aria-current="page"
              >
                Collections
              </ItemMenuNavbar>
              <ItemMenuNavbar
                className="nav-link my-0 mx-2"
                aria-current="page"
              >
                Men
              </ItemMenuNavbar>
              <ItemMenuNavbar
                className="nav-link my-0 mx-2"
                aria-current="page"
              >
                Women
              </ItemMenuNavbar>
              <ItemMenuNavbar
                className="nav-link my-0 mx-2"
                aria-current="page"
              >
                About
              </ItemMenuNavbar>
              <ItemMenuNavbar
                className="nav-link my-0 mx-2"
                aria-current="page"
              >
                Contact
              </ItemMenuNavbar>
            </ul>
          </div>
        </div>
        {/* icono carrito y usuario */}
        <div className="d-flex justify-content-end align-items-center">
          <button type="button" className="btn btn-white me-2 me-lg-4">
            <img src="/src/assets/images/icon-cart.svg" alt="carrito" />
          </button>
          <div className="w-25 overflow-hidden ">
            <img
              className="w-100"
              src="/src/assets/images/image-avatar.png"
              alt="avatar-user"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
import "./style-card-cart.scss";
import { MyButton } from "../MyButton/MyButton";
export const CardCart = ({ children, arrayProductCart }) => {
  return (
    <div className="card  my-card">
      <div className="card-header fw-bold">Cart</div>
      <div className="card-body">
        <div className="container-items-products">
          <div className="w-100 h-100 overflow-auto ">{children}</div>
        </div>
        {arrayProductCart.length > 0 ? <MyButton>Checkout</MyButton> : null}
      </div>
    </div>
  );
};

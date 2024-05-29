import classes from "./CartButton.module.css";
import { cartActions } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItmesInCart = useSelector((state) => state.cart.totalItemsInCart);
  const displayCartHandler = () => {
    dispatch(cartActions.displayCart());
  };
  return (
    <button className={classes.button} onClick={displayCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItmesInCart}</span>
    </button>
  );
};

export default CartButton;

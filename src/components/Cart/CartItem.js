import classes from "./CartItem.module.css";
import { cartActions } from "../../store/reducers/cart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, pID } = props.item;
  const addItemsInCartHandler = () => {
    dispatch(cartActions.increaseItems(pID));
  };
  const reduceItemsInCartHandler = () => {
    dispatch(cartActions.removeItem(pID));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduceItemsInCartHandler}>-</button>
          <button onClick={addItemsInCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

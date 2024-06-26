import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/reducers/cart";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, pID } = props;
  const addItemsToCartHandler = () => {
    dispatch(cartActions.addItems({ pID: pID, title: title, price: price }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemsToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

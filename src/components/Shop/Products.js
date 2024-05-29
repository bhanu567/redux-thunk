import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    pID: 1,
    title: "My first Book",
    price: 6,
    description: "Bhanu Prakash Jha",
  },
  {
    pID: 2,
    title: "My Second Book",
    price: 29,
    description: "Hare Krishna Jha",
  },
  { pID: 3, title: "My Third Book", price: 29, description: "Sunaina Devi" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            pID={product.pID}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

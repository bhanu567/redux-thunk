import { Fragment } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

function App() {
  const isShow = useSelector((state) => state.cart.isShow);
  const notification = useSelector((state) => state.ui.notification);
  const isNotication = useSelector((state) => state.ui.isVisible);
  return (
    <Fragment>
      {isNotication && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

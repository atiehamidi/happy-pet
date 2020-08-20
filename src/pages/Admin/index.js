import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken, selectAdmin } from "../../store/user/selectors";
import { selectOrders } from "../../store/orders/selectors";
import { fetchOrders } from "../../store/orders/actions";
export default function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const isAdmin = useSelector(selectAdmin);
  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    token === null ? history.push("/") : dispatch(fetchOrders());
  }, [token, history]);

  return (
    <div>
      <h3>List Of Orders</h3>
      {/* {orders.map((order) => {
        return <div>{order.id}</div>;
      })} */}
    </div>
  );
}

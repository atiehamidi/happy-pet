import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken, selectAdmin } from "../../store/user/selectors";
import { selectOrders } from "../../store/orders/selectors";
import { fetchOrders } from "../../store/orders/actions";
export default function Admin() {
  const [isdone, setIsdone] = useState("❌");
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const isAdmin = useSelector(selectAdmin);
  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    token === null ? history.push("/") : dispatch(fetchOrders());
  }, [token, history]);

  function onClick(event) {
    event.target.value === "❌" ? setIsdone("✅") : setIsdone("❌");
  }

  return (
    <div>
      <h3>List Of Orders</h3>

      {/* {orders.map((order) => {
        return <div>{order.id}</div>;
      })} */}

      <table>
        <thead>
          <strong>🤑ORders🤑</strong>
        </thead>
        <thead>
          <tr>
            <th>Id</th>
            <th>Total</th>
            <th>Start</th>
            <th>End</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.total}</td>
                <td>{order.start}</td>
                <td>{order.end}</td>
                <td>{order.descriptionOfOrder}</td>
                <td>
                  <button onClick={onClick} value={order.id}>
                    {order.done ? "✅" : "❌"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

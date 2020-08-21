import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken, selectAdmin } from "../../store/user/selectors";
import { selectOrders } from "../../store/orders/selectors";
import { fetchOrders, changeOrders } from "../../store/orders/actions";
export default function Admin() {
  const [isdone, setIsdone] = useState("");
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const isAdmin = useSelector(selectAdmin);
  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    token === null ? history.push("/") : dispatch(fetchOrders());
  }, [token, history]);

  function onClick(event) {
    dispatch(changeOrders(event.target.value));
  }

  return (
    <div>
      <h3>List Of Orders</h3>

      <table>
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
            // setIsdone(order.done ? "✅" : "❌");
            var str = order.start;
            var start = str.split("T");
            var timeOfStart = start[1].split(".");
            var strEnd = order.end;
            var End = strEnd.split("T");
            var timeOfEnd = End[1].split(".");
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.total}</td>
                <td>
                  {start[0]}/{timeOfStart[0]}
                </td>
                <td>
                  {End[0]}/{timeOfEnd[0]}
                </td>
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

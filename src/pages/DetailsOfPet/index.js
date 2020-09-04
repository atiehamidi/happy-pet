import React, { useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { fetchPet } from "../../store/pet/actions";
import { selectPet } from "../../store/pet/selectors";
import "./index.css";
export default function DetailsOfPet() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const Pet = useSelector(selectPet);

  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    token === null ? history.push("/") : dispatch(fetchPet(id));
  }, [token, history]);

  const birth = Date.parse(Pet.birthday);
  const today = new Date();
  today.getDate();
  const currentDate = Date.parse(today);
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;

  const age = Math.round((currentDate - birth) / years);
  return (
    <div>
      {" "}
      <div className="background">
        <div className="transbox">
          <p>name:{Pet.name}</p>
          <p>type:{Pet.type}</p>
          <p>age:{age} </p>
          <p>breed:{Pet.breed}</p>
          <img
            src={Pet.imageOfPet}
            style={{ width: "250px", height: "250px" }}
          />
          <Link to={`/${Pet.id}/newservice`}>
            <button className="button1">Request</button>
          </Link>
          <table className="customers">
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
              {Pet.orders.map((order) => {
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
                    <td>{order.done ? "✅" : "❌"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

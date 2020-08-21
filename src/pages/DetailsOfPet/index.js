import React, { useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { fetchPet } from "../../store/pet/actions";
import { selectPet } from "../../store/pet/selectors";

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
          {Pet.orders.map((order) => {
            return (
              <div key={order.id}>
                <p>{order.total}</p>
                {order.done ? "?" : "no"}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

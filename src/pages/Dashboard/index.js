import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

import "./index.css";

import { selectToken } from "../../store/user/selectors";

export default function Dashboard() {
  const user = useSelector(selectUser);
  console.log("testdashboard", user.pets);
  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);
  return (
    <div className="background">
      <div className="transbox">
        <div calssName="flex-container">
          <h4>Profile</h4>
          <p>firstname:{user.firstName}</p>
          <p>Lastname:{user.lastName}</p>
          <p>Email:{user.email}</p>
          <p>Phone:{user.phone}</p>
        </div>
        <div>
          <button className="button1">Edit</button>
          <Link to={`/${user.id}/newpet`}>
            <button className="button1">new pet</button>
          </Link>
        </div>
      </div>
      <div className="transbox">
        {user.pets.map((pet) => {
          return (
            <div key={pet.id}>
              <div style={{ display: "inline-flex" }}>
                <img
                  src={pet.imageOfPet}
                  style={{ width: "150px", height: "150px" }}
                />
                <p style={{ textAlign: "center" }}>{pet.name}</p>

                <Link to={`/${pet.id}`}>
                  <button className="button1">details</button>
                </Link>
                <Link to={`/${pet.id}/newservice`}>
                  <button className="button1">Request</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

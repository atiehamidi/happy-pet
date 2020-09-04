import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { editProfile } from "../../store/user/actions";
import "./index.css";

import { selectToken } from "../../store/user/selectors";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const history = useHistory();

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const editProfile = () => {
    console.log(name, lastName, phone);
    dispatch(editProfile(name, lastName, phone));
    setEdit(false);
    setName("");
    setLastName("");
    setPhone("");
  };

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);
  return (
    <div className="background">
      <div className="transbox">
        <div calssName="flex-container">
          {!edit ? (
            <div>
              <h4>Profile</h4>
              <p>firstname:{user.firstName}</p>
              <p>Lastname:{user.lastName}</p>
              <p>Email:{user.email}</p>
              <p>Phone:{user.phone}</p>
              <button
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <form>
                <p>
                  firstname:
                  <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                </p>
                <p>
                  Lastname:
                  <input
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  ></input>
                </p>
                <p>
                  Email:<br></br>
                  <input
                    type="text"
                    value={user.email}
                    placeholder={user.email}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    readOnly
                  ></input>
                </p>
                <p>
                  Phone:<br></br>
                  <input
                    type="text"
                    value={phone}
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  ></input>
                </p>
                <button type="submit" onClick={editProfile}>
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="buttonBox">
          <Link to={`/${user.id}/newpet`}>
            <button className="button1">new pet</button>
          </Link>
        </div>
      </div>
      <div className="transbox">
        {user.pets.map((pet) => {
          return (
            <div key={pet.id}>
              <div style={{ display: "inline-flex", marginRight: "40px" }}>
                <img
                  src={pet.imageOfPet}
                  style={{ width: "150px", height: "150px" }}
                />
                <p style={{ textAlign: "center" }}>{pet.name}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "40px",
                  }}
                >
                  <Link to={`/${pet.id}`}>
                    <button className="button1">details</button>
                  </Link>
                  <Link to={`/${pet.id}/newservice`}>
                    <button className="button1">Request</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

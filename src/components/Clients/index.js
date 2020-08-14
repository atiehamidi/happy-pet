import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectClients } from "../../store/homePage/selectors";
import { fetchClients } from "../../store/homePage/actions";

export default function Clients() {
  const clients = useSelector(selectClients);
  console.log(clients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClients());
  }, []);
  return (
    <div>
      <h3>Our clients</h3>
      {clients.map((client) => {
        return (
          <div key={client.id} style={{ display: "inline-flex" }}>
            <div style={{ marginRight: "50px" }}>
              <img
                src={client.imageOfPet}
                style={{ width: "150px", height: "150px" }}
              />
              <p style={{ textAlign: "center" }}>{client.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

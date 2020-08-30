import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectService } from "../../store/homePage/selectors";
import { fetchServices } from "../../store/homePage/actions";

export default function Oursrvices() {
  const services = useSelector(selectService);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  return (
    <div style={{ display: "flex", margin: "auto" }}>
      {services.map((servic) => {
        return (
          <div
            key={servic.id}
            style={{ margin: "auto", display: "flex", flexDirection: "column" }}
          >
            <img
              src={servic.image}
              style={{ width: "150px", height: "150px" }}
            />
            <div>
              <p style={{ display: "inline", marginRight: "10px" }}>
                {servic.typeOfOrder}
              </p>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                title={`for each hours ${servic.price} $`}
                style={{ display: "inline" }}
              >
                <kbd>?</kbd>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

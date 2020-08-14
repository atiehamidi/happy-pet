import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectService } from "../../store/homePage/selectors";

export default function Oursrvices() {
  const services = useSelector(selectService);
  return (
    <div>
      {services.map((servic) => {
        return (
          <div>
            <img
              src={servic.image}
              style={{ width: "150px", height: "150px" }}
            />
            <p>{servic.typeOfOrder}</p>
          </div>
        );
      })}
    </div>
  );
}

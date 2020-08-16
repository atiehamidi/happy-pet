import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function NewPet() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);
  return (
    <div className="background">
      <div className="transbox">
        <form></form>
      </div>
    </div>
  );
}

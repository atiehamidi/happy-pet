import React, { useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { fetchPet } from "../../store/pet/actions";

export default function DetailsOfPet() {
  const { id } = useParams();

  const dispatch = useDispatch();
  console.log("details of pet works");
  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    token === null ? history.push("/") : dispatch(fetchPet(id));
  }, [token, history]);
  return (
    <div>
      {" "}
      <div className="background">
        <div className="transbox"></div>
      </div>
    </div>
  );
}

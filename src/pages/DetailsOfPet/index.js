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
  return (
    <div>
      {" "}
      <div className="background">
        <div className="transbox">
          <p>name:{Pet.name}</p>
        </div>
      </div>
    </div>
  );
}

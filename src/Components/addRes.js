import Restaurant from "./restaurant";
import "./addRes.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restActions } from "../store/res_list";
import swal from "sweetalert";

const AddRes = () => {
  const dispatch = useDispatch();
  const restData = useSelector((state) => state.restaurant.restData);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    let searchRes = e.target.value;
    if (searchRes !== "") {
      let resToAdd = Restaurant?.filter((res) =>
        res.toLowerCase().includes(searchRes.toLowerCase())
      );
      setData(resToAdd);
    } else {
      setData([]);
    }
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const handleClick = (e) => {
    e.preventDefault();
    let data = document.getElementById("addRes").value;

    if (data !== "") {
      swal("Congratulations!", "Restaurant added to dashboard!", "success");
      let obj = {
        id: restData?.length + 1,
        name: data,
      };
      dispatch(restActions.addRest(obj));
    }
  };

  return (
    <>
      <form style={{ backgroundColor: "#14202e" }}>
        <div className="d-flex p-4">
          <input
            type="text"
            list="inputRes"
            id="addRes"
            className="form-control bg-dark text-white"
            onChange={debounce(handleChange, 500)}
            placeholder="Enter restaurant to add..."
          />

          <datalist id="inputRes">
            {data.map((d) => {
              return (
                <>
                  <option>{d}</option>
                </>
              );
            })}
          </datalist>
          <button type="submit" className="btn btn-info" onClick={handleClick}>
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRes;

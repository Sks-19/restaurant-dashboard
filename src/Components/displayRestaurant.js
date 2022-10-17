import "./displayRes.css";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkActions } from "../store/bookmark_list";
import { restActions } from "../store/res_list";
import { useEffect } from "react";

const DisplayRes = () => {
  const dispatch = useDispatch();
  const restData = useSelector((state) => state.restaurant.restData);

  const localBookData = JSON.parse(localStorage.getItem("bookData"));
  const localRestData = JSON.parse(localStorage.getItem("restData"));

  console.log(localBookData, localRestData);

  useEffect(() => {
    localStorage.setItem("restData", JSON.stringify(restData));
  }, [restData]);

  const handleBookmark = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const name = e.target.name;

    dispatch(bookmarkActions.addBookmark({ id, name }));
    dispatch(restActions.delRest(+id));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const id = e.target.value;
    dispatch(restActions.delRest(+id));
  };

  return (
    <>
      <div className="container">
        <div className="Cardss">
          {restData?.map((res) => (
            <div className="card mb-3" key={res.id}>
              <embed
                type="text/html"
                src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${res.name}"}`}
                width="100%"
                height="350"
              ></embed>
              <div className="card-body">
                <h5 id="title" className="card-title">
                  {res.name}
                </h5>
                <div className="">
                  <button
                    type="button"
                    name={res.name}
                    value={res.id}
                    className="btn btn-outline-primary w-50"
                    onClick={handleBookmark}
                  >
                    Bookmark
                  </button>
                  <button
                    type="button"
                    value={res.id}
                    className="btn btn-outline-danger w-50"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayRes;

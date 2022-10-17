import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkActions } from "../store/bookmark_list";
import { restActions } from "../store/res_list";

const Bookmark = () => {
  const dispatch = useDispatch();
  const bookmarkData = useSelector((state) => state.bookmark.bookmarkData);

  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(bookmarkData));
  }, [bookmarkData]);

  const handleRemove = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const name = e.target.name;

    dispatch(bookmarkActions.removeBookmark(id));

    let obj = {
      id: Number(id),
      name: name,
    };
    dispatch(restActions.addRest(obj));
  };
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }} className="my-4">
          {" "}
          Bookmarked Restauants{" "}
        </h1>
        <div className="Cardss">
          {bookmarkData?.map((res, index) => {
            return (
              <>
                <div className="card mb-3" key={index}>
                  <embed
                    type="text/html"
                    src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${res.name}"}`}
                    width="100%"
                    height="350"
                  ></embed>
                  <div className="card-body">
                    <h5 className="card-title">{res.name}</h5>
                    <div className="">
                      <button
                        type="button"
                        name={res.name}
                        value={res.id}
                        className="btn btn-outline-primary w-50 m-4"
                        onClick={handleRemove}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bookmark;

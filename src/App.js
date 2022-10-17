import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navBar";
import Home from "./Components/home";
import Bookmark from "./Components/bookmark";
import Login from "./Components/Login";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restActions } from "./store/res_list";
import { bookmarkActions } from "./store/bookmark_list";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const restData = useSelector((state) => state.restaurant.restData);
  const bookmarkData = useSelector((state) => state.bookmark.bookmarkData);

  useEffect(() => {
    if (!localStorage.getItem("restData")) {
      localStorage.setItem("restData", JSON.stringify([]));
    }
    if (!localStorage.getItem("bookData")) {
      localStorage.setItem("bookData", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const localBookData = JSON.parse(localStorage.getItem("bookData"));
    const localRestData = JSON.parse(localStorage.getItem("restData"));
    dispatch(restActions.updateRest(localRestData));
    dispatch(bookmarkActions.updateBookmark(localBookData));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("restData", JSON.stringify(restData));
  //   localStorage.setItem("bookData", JSON.stringify(bookmarkData));
  // }, [restData, bookmarkData]);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarked" element={<Bookmark />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

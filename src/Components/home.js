import AddRes from "./addRes";
import DisplayRes from "./displayRestaurant";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}> Restaurant List </h1>
        <AddRes />
        <DisplayRes />
      </div>
    </>
  );
};

export default Home;

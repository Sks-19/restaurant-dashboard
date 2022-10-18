import AddRes from "./addRes";
import DisplayRes from "./displayRestaurant";

const Home = () => {
  return (
    <>
      <div className="container">
        <AddRes />
        <h1 className="py-3 text-white" style={{ textAlign: "center" }}>
          Restaurant List
        </h1>

        <DisplayRes />
      </div>
    </>
  );
};

export default Home;

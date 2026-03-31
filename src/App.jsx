import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import NavBar from "./components/NavBar";
const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar> </NavBar>
      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Models
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models>
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      <Footer></Footer>
    </>
  );
}

export default App;


import React from "react"
import Banner from "./Component/Banner"
import Cart from "./Component/Cart"
import Footer from "./Component/Footer"
import GetStared from "./Component/GetStared"
import Models from "./Component/Models"
import Navber from "./Component/Navber"
import Premium from "./Component/Premium"
import Transform from "./Component/Transform"
import Transparent from "./Component/Transparent"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [activeTab, setActiveTab] = React.useState("Products");
  const [carts, setCarts] = React.useState([]);

  return (
    <>
      <Navber />
      <Banner />
      <Premium />
      <ToastContainer />

      <div className="tabs tabs-box justify-center gap-4 mt-8">
        <input
          type="radio"
          name="my_tabs_1"
          className={`btn rounded-full ${activeTab === "Products"
              ? "bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] text-white"
              : "text-black"
            }`}
          aria-label="Products"
          onClick={() => setActiveTab("Products")}
          checked={activeTab === "Products"}
        />

        <input
          type="radio"
          name="my_tabs_1"
          className={`btn rounded-full ${activeTab === "Cart"
              ? "bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] text-white"
              : "text-black"
            }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("Cart")}
          checked={activeTab === "Cart"}
        />
      </div>

      {activeTab === "Products" && (
        <Models carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "Cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <GetStared />
      <Transparent />
      <Transform />
      <Footer />
    </>
  )
}

export default App
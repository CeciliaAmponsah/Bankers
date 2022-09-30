import React from "react";
import bannerImage from "../assets/images/bank.jpg";

const Home = () => {
  return (
    <div>
      <img src={bannerImage} className="full-screen" />
      <div className=" absolute bottom-1/2 left-1/2 p-40">
        <h1 className="text-gray-800 text-8xl font-extrabold ">BANKERS REALM</h1>
      </div>
    </div>
  );
};

export default Home;

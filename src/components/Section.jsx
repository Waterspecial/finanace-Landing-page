import React from "react";
import Laptop from "../assets/laptop.jpeg";

const Section = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="uppercase font-medium text-[#00df9a]">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold py-2">
            Manage Data Analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            magnam cumque assumenda at nihil sint, exercitationem eum ut numquam
            nisi dolor velit, dolore saepe aut! Neque placeat veniam tenetur
            consectetur.
          </p>
          <button className="bg-[#000300] w-[200px] mx-auto md:mx-0 rounded-md my-6 font-medium py-3 text-[#00df9a]">
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
};

export default Section;

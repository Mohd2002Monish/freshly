import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="categoryCard flex">
      <div
        style={{ backgroundColor: `${data.color}` }}
        className="categoryIcon flex"
      >
        <img src={data.img} alt="" />
      </div>

      <h1>{data.name}</h1>
      <p>One powerful online software suite that combines</p>
      <button className="buttonMore">
        <span className="buttonName1">More</span>
        <span className="buttonName2">Explore courses</span>
      </button>
    </div>
  );
}

export default CategoryCard;

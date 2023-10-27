import React from "react";
import CategoryCard from "./CategoryCard";
import img1 from "../imgs/1.png";
import img2 from "../imgs/2.png";
import img3 from "../imgs/3.png";
import img4 from "../imgs/4.png";
function CourseCategory() {
  const Data = [
    {
      color: "#a3d3ff",
      name: "Beauty",
      img: img1,
    },
    {
      color: "#f1c9ff",
      name: "Medical",
      img: img2,
    },
    {
      color: "#ffb800",
      name: "Sports",
      img: img3,
    },
    {
      color: "#cac9ff",
      name: "Nutrition",
      img: img4,
    },
  ];
  return (
    <>
      <div className="categorytitle">
        <h1>Courses Category</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="178"
          height="10"
          viewBox="0 0 178 10"
          fill="none"
        >
          <path
            d="M1.00015 8.37698C49.534 0.287994 116.717 -0.38613 177.834 8.37698"
            stroke="#FD661F"
            stroke-width="2.24694"
          />
        </svg>
      </div>

      <div className="subTitle flex">
        <p>
          Onlearing is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>
      <div className="grid2 flex">
        {" "}
        {Data.map((el) => {
          return <CategoryCard key={Math.random} data={el} />;
        })}
      </div>
      <div className="viewAllbtn flex">
        <button>view all</button>
      </div>
    </>
  );
}

export default CourseCategory;

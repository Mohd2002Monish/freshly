import React from "react";
import Navbar from "../Components/Navbare";
import HomeScreen from "../Components/HomeScreen";
import PopularCourser from "../Components/PopularCourser";
import CourseCategory from "../Components/CourseCategory";
import StudentsCard from "../Components/StudentsCard";
import StaffTraining from "../Components/StaffTraining";
import GiftCardOffer from "../Components/GiftCardOffer";
import ExclusiveBundle from "../Components/ExclusiveBundle";
import Footer from "../Components/Footer";
function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <HomeScreen />
      <PopularCourser />
      <CourseCategory />
      <StudentsCard />
      <StaffTraining />
      <GiftCardOffer />
      <ExclusiveBundle />
      <Footer />
    </div>
  );
}

export default HomePage;

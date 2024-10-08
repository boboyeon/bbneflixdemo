import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovie from "./components/TopRatedMovie/TopRatedMovie";
import UpcomingMovie from "./components/UpcomingMovie/UpcomingMovie";
// 1. 배너 -> popular movie의 첫번째 아이템 보여주기
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovie />
      <UpcomingMovie />
    </div>
  );
};

export default Homepage;

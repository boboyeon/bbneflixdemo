import { Routes, Route } from 'react-router-dom';
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지 = /
// 영화 전체를 보여주는 페이지 (서치) = /movies
// 영화 디테일 페이지 = /movies/:id

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />}/>
        {/* 연관된 주소를 묶어서 구성한 라우트 (movies) */}
        <Route path="movies">
          <Route index element={<MoviePage />}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
        {/* <Route path='/movies' element={<MoviePage/>}></Route>
      <Route path='/movies/:id' element={<MovieDetailPage/>}></Route> 
      => 라우트를 구성하는 기본 */}


        <Route path="*" element={<NotFoundPage/>}/>

      </Route>
    </Routes>
  );
}

export default App;

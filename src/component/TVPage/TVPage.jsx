import React, { useState, useEffect } from "react";
import FilterMovie from "../FilterMovie/FilterMovie";
import Pagination from "../Pagination/Pagination";
import Poster from "../Poster/Poster";
function TVPage() {
  const [filters, setFilters] = useState({
    page: 1,
  });
  const [renderfilm, setRenderFilm] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    const fechtMovie = async () => {
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=5761f00d4efd80b92ba2496773204780&page=${filters.page}&first_air_date_year=${filters.year}`;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      const { results, total_pages } = data;
      setRenderFilm(results);
      setTotalPage(total_pages);
    };
    fechtMovie();
  }, [filters]);

  const handlePageChange = (pageNumber) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };

  return (
    <div className="movie-page">
      <h1 style={{ color: "#fff", fontWeight: "500" }}>Phim bộ</h1>
      <Poster filmData={renderfilm} number={16} />
      <Pagination
        page={filters.page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default TVPage;

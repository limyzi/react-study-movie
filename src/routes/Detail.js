import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail(){
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [])

	return(
    <>
    {loading?<h1>Loading...</h1>:
      <MovieDetail
      key={movie.id}
      coverImage={movie.medium_cover_image}
      title={movie.title} 
      year = {movie.year}
      genres={movie.genres} 
      description={movie.description_intro}
      rating={movie.rating}
      />
    }
    </>
  )
}

export default Detail;
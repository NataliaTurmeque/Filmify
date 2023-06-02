import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import '../style/MovieCard.css'

function MovieCard() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '3c68e61f3639d06d804e9f8c374769e5'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //variables de estado

  const [movies, setMovies] = useState([])
  const [searchkey, setSearchKey] = useState('')
  const [trailer, setTrailer] = useState(null)
  const [movie, setMovie] = useState({ title: 'Cargando peliculas' })
  const [playing, setPlaying] = useState(false)

  //pfuncion para hacer peticion GET ala api

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover'
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchkey,
      },
    })

    setMovies(results)
    setMovie(results[0])

    if (results.length) {
      await fetchMovie(results[0].id)
    }
  }

  //funcion para traer un solo objeto y ver el trailer
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos',
      },
    })
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === 'Official Trailer',
      )
      setTrailer(trailer ? trailer : data.videos.result[0])
    }
    setMovie(data)
  }

  const selectMovie = async (movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0, 0)
  }
  // funcion para buscar las pelis

  const searchMovies = (e) => {
    e.preventDefault()
    fetchMovies(searchkey)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  //const movies = MoviesData.Search
  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Pelicuas 100% legales no fake</h2>
      {/* buscador */}
      <form className="container mb-4" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Avengers, Pulp Fiction, Hee Hee"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
      {/* Aqui va el banner y el reproductor del la pelicula 100% legal */}
      <div>
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={'youtube-container'}
                    opts={{
                      width: '100%',
                      height: '100%',
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      'Sorry, no trailer available'
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>
      {/* contenedor de tarjetas de pelicula */}
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-2 mb-5" onClick={()=>selectMovie(movie)}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt="" />
              <h4 className="text-center">{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard

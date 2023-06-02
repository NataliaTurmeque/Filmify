  //funcion para hacer peticion GET ala api
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

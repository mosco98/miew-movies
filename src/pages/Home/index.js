import { useEffect, useCallback, useState } from "react"
import { Header, Menu, MovieCard } from "../../components"
import axios from "axios"

import { useSelector, useDispatch } from "react-redux"
import { setMovies } from "../../utils/redux/actions/movieActions"

import { apiKey } from "./../../utils/config"

import { Loader } from "react-feather"

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`

const Home = () => {
  const [loading, updateLoading] = useState(true)
  const [error, updateError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const dispatch = useDispatch()

  const movies = useSelector((state) => state.allMovies.movies)

  const getMovies = useCallback(async () => {
    try {
      const responses = await Promise.all([
        axios(`${url}&page=1`),
        axios(`${url}&page=2`)
      ])

      const movies = responses.reduce((a, b) => [
        ...a.data.results,
        ...b.data.results
      ])

      dispatch(setMovies(movies))
      updateLoading(false)
      return
    } catch (error) {
      updateLoading(false)
      updateError(true)
      setErrorMsg("Network error, Refresh page")
      return []
    }
  }, [dispatch])

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <div className="h-full p-8 animate__animated animate__fadeIn">
      <Header />

      <div className="h-3/4">
        <h1 className="text-2xl mt-7">
          <span className="font-semibold">Featured</span> Movies
        </h1>
        {loading ? (
          <div className="mt-32">
            <Loader className="mx-auto animate-spin" />
          </div>
        ) : error ? (
          <div className="mt-32 text-center">
            <span>{errorMsg}</span>
          </div>
        ) : (
          <div className="px-8 flex justify-center relative mt-8 w-9/12 mx-auto">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>

      <Menu />
    </div>
  )
}

export default Home

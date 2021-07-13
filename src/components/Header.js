import { useState } from "react"
import { User, Search, Mic } from "react-feather"
import axios from "axios"
import { apiKey } from "./../utils/config"
import { useDispatch } from "react-redux"
import { setSearchResults } from "../utils/redux/actions/movieActions"
import { useHistory } from "react-router-dom"

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const dispatch = useDispatch()

  const history = useHistory()

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      )
      dispatch(setSearchResults(response.data.results))
      history.push("/search")
    } catch (error) {
      console.log(error)
      return []
    }
  }
  return (
    <header className="space-y-7">
      <nav className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-light opacity-95">
            <span className="font-bold">Hello</span> there!
          </h1>
          <p className="font-extralight opacity-70">Book your favorite movie</p>
        </div>

        <User size="60" color="black" className="bg-white p-5 rounded-full" />
      </nav>
      <form
        className="flex items-center justify-between px-2 bg-white bg-opacity-5 rounded-3xl"
        onSubmit={submitHandler}
      >
        <Search className="px-4 py-2 opacity-70" size="60" />
        <input
          className="w-full border-r border-opacity-20 outline-none focus:outline-none bg-transparent"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Mic className="px-4 py-2 opacity-70" size="60" />
      </form>
    </header>
  )
}

export default Header

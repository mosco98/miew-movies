import { Header, Menu } from "../../components"

import { useSelector } from "react-redux"
import { MovieCard } from "./../../components"

const SearchResults = (props) => {
  const searchResults = useSelector(
    (state) => state.searchResults.searchResults
  )

  return (
    <div className="h-full p-8">
      <Header />

      {searchResults.length === 0 ? (
        <div className="mt-32 text-center">
          <p>No search results</p>
        </div>
      ) : (
        <div className="space-y-8 h-3/4 mt-8">
          <h1 className="text-2xl">
            <span className="font-semibold">Search</span> Results
          </h1>

          <div className="px-8 flex justify-center relative">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}

      <Menu />
    </div>
  )
}

export default SearchResults

import { useState, useEffect } from "react"
import { Header, Menu } from "../../components"

const Favorites = () => {
  const [likes, setLikes] = useState([])

  useEffect(() => {
    const likesFromStorage = JSON.parse(localStorage.getItem("likes")) || []

    setLikes(likesFromStorage)
  }, [])

  return (
    <div className="h-full p-8 animate__animated animate__fadeIn animate__fast">
      <Header />

      <div className="h-3/4">
        <h1 className="text-2xl mt-7">
          <span className="font-semibold">Liked</span> Movies
        </h1>

        {likes.length === 0 ? (
          <div className="mt-32 text-center">
            <span>No liked movies</span>
          </div>
        ) : (
          <div className="px-2 mt-8 h-3/5 overflow-y-auto">
            {likes.map((movie, i) => (
              <div
                className="flex items-center space-x-1 bg-black bg-opacity-10 py-1 mb-2"
                key={movie.id}
              >
                <small>{i + 1}.</small>
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Menu />
    </div>
  )
}

export default Favorites

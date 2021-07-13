import { useState, useEffect } from "react"
import { Header, Menu } from "../../components"

const Dislikes = () => {
  const [dislikes, setDislikes] = useState([])

  useEffect(() => {
    const dislikesFromStorage =
      JSON.parse(localStorage.getItem("dislikes")) || []

    setDislikes(dislikesFromStorage)
  }, [])

  return (
    <div className="h-full p-8 animate__animated animate__fadeIn">
      <Header />

      <div className="h-3/4">
        <h1 className="text-2xl mt-7">
          <span className="font-semibold">Disliked</span> Movies
        </h1>

        {dislikes.length === 0 ? (
          <div className="mt-32 text-center">
            <span>No liked movies</span>
          </div>
        ) : (
          <div className="px-2 mt-8 h-3/5 overflow-y-auto">
            {dislikes.map((movie, i) => (
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

export default Dislikes

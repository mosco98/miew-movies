// import { Star } from "react-feather"
import TinderCard from "react-tinder-card"

const imageUrl = "https://image.tmdb.org/t/p/w500"

const MovieCard = ({ movie }) => {
  function saveLikes() {
    const likes = JSON.parse(localStorage.getItem("likes")) || []

    // Avoid saving one movie twice
    const filteredArray = likes.filter((like) => like.id === movie.id)

    if (filteredArray.length) return

    const newLikes = JSON.stringify([...likes, movie]) || []

    localStorage.setItem("likes", newLikes)
  }

  function saveDislikes() {
    const dislikes = JSON.parse(localStorage.getItem("dislikes")) || []

    // Avoid saving one movie twice
    const filteredArray = dislikes.filter((dislike) => dislike.id === movie.id)

    if (filteredArray.length) return

    const newLikes = JSON.stringify([...dislikes, movie]) || []

    localStorage.setItem("dislikes", newLikes)
  }

  function cardSwipeHandler(direction) {
    if (direction === "right") {
      saveLikes()
      return
    }

    if (direction === "left") {
      saveDislikes()
      return
    }
  }

  return (
    <TinderCard
      onSwipe={cardSwipeHandler}
      className="absolute top-0"
      preventSwipe={["up", "down"]}
      style={{ backgroundColor: "#1c1c26" }}
    >
      <div className="mx-auto rounded-2xl card">
        <img
          className="mx-auto w-full rounded-md"
          style={{ height: "23rem" }}
          src={`${imageUrl}/${movie.poster_path}`}
          alt="movie-poster"
        />
      </div>
    </TinderCard>
  )
}

export default MovieCard

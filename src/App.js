import { Route } from "react-router-dom"
import { Home, SearchResults, Favorites, Dislikes } from "./pages"

const App = () => {
  return (
    <div className="h-screen text-white" style={{ backgroundColor: "#1c1c26" }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={SearchResults} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/dislikes" component={Dislikes} />
    </div>
  )
}

export default App

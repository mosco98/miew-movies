import { Home, User, Compass, Heart } from "react-feather"

import { useLocation, Link } from "react-router-dom"

const Menu = () => {
  const location = useLocation()

  return (
    <div className="w-full flex justify-between fixed bottom-0 p-8 left-0">
      <Link to="/">
        <span className="flex flex-col items-center space-y-2">
          <Home className="" size="35" strokeWidth="1.3" />
          {location.pathname === "/" && (
            <span className="bg-white p-1 rounded-full"></span>
          )}
        </span>
      </Link>

      <Link to="/dislikes">
        <span className="flex flex-col items-center space-y-2">
          <Compass size="35" strokeWidth="1.3" />
          {location.pathname === "/dislikes" && (
            <span className="bg-white p-1 rounded-full"></span>
          )}
        </span>
      </Link>

      <Link to="/favorites">
        <span className="flex flex-col items-center space-y-2">
          <Heart size="35" strokeWidth="1.3" />
          {location.pathname === "/favorites" && (
            <span className="bg-white p-1 rounded-full"></span>
          )}
        </span>
      </Link>

      <span className="flex flex-col items-center space-y-2">
        <User size="35" strokeWidth="1.3" />
      </span>
    </div>
  )
}

export default Menu

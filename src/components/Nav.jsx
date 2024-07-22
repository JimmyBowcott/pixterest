import { Link } from "react-router-dom";
import "../css/index.css"

const Nav = () => {
    return (
        <nav className="m-6 flex flex-row items-center justify-between text-lg">
          <div className="flex flex-row items-center">
            <img src="favicon.ico" alt="" className="pixelated h-8 w-8 mr-2"/>
            <p className="text-xl text-text-error mr-4 font-bold">Pixterest</p>
            <ul className="flex flex-row gap-8 mx-4 items-center">
            <li className="hover:underline"><Link to="/">Today</Link></li>
            <li className="hover:underline"><Link to="/">Watch</Link></li>
            <li className="hover:underline"><Link to="/">Explore</Link></li>
          </ul>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <ul className="flex flex-row gap-8 mx-6">
              <li className="hover:underline"><Link to="/about">About</Link></li>
              <li className="hover:underline"><Link to="/">Business</Link></li>
              <li className="hover:underline"><Link to="/">Blog</Link></li>
            </ul>
            <button className="bg-pixterest-red hover:bg-bg-btn-p-hov text-white rounded-3xl p-1 px-3">Log in</button>
            <button className="bg-bg-btn-s-d hover:bg-bg-btn-s-hov rounded-3xl p-1 px-3">Sign up</button>
          </div>
      </nav>  
    )
}

export default Nav;
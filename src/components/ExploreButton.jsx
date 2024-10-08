import { Link } from "react-router-dom";

const ExploreButton = () => {
    return (
        <Link to="/explore" tabIndex="-1">
            <button className="bg-pixterest-red hover:bg-bg-btn-p-hov text-white rounded-3xl p-3 px-4 text-lg">Explore</button>
        </Link>
    )
}

export default ExploreButton;
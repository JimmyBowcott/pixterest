import { Link } from 'react-router-dom';
import ExploreButton from '../components/ExploreButton';
import '../css/Section.css'

const SearchSection = () => {
    return (
        <div style={{padding: "5%"}} className="flex flex-row flex-wrap justify-around items-center bg-pale-yellow text-pink-red h-screen">
            <div className="relative max-h-[500px] max-w-[550px] h-full w-full">
                <Link to="/search?q=home office" tabIndex="-1">
                    <div className="absolute top-40 left-1/4 h-20 w-60 bg-white rounded-full z-30 flex flex-row items-center gap-4 px-6">
                        <img src="src/assets/icons/search.png" className="pixelated h-6" alt="" />
                        <p className="text-2xl text-almost-black">home office</p>
                    </div>
                </Link>
                <img style={{width: "50%", left: "20%"}} className="pixelated rounded-3xl absolute top-16 z-20" src="src/assets/artwork/search/2.png" />
                <img style={{width: "35%"}} className="pixelated rounded-3xl absolute top-36 left-0" src="src/assets/artwork/search/4.png" />
                <img style={{width: "30%", left: "58%"}} className="pixelated rounded-3xl absolute top-0" src="src/assets/artwork/search/3.png" />
                <img style={{width: "30%", left: "52%"}} className="pixelated rounded-3xl absolute top-80" src="src/assets/artwork/search/1.png" />
            </div>
            <div className="flex flex-col justify-center items-center text-center lowResHide">
                <h1 className="text-5xl font-bold" style={{marginBottom: "3%"}}>Search for an idea</h1>
                <p className="text-xl  max-w-md" style={{marginBottom: "3%"}}>What do you want to try next? Think of something you're into — like “home office” — and see what you find.</p>
                <ExploreButton />
            </div>
        </div>
    )
}

export default SearchSection;
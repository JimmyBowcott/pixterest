import { Link } from 'react-router-dom';
import ExploreButton from '../../components/ExploreButton';
import '../../css/Section.css'

const SearchSection = () => {
      
        return (
          <div className="flex flex-wrap justify-around items-center bg-pale-yellow text-pink-red h-screen pt-20 px-6 md:px-10 lg:px-20">
            <div className="relative max-h-[450px] max-w-[400px] lg:max-h-[570px] lg:max-w-[35rem] h-full w-full -mt-12 -mr-20 lg:mt-0 flex-shrink-0">
                <Link to="/search?q=home office" tabIndex="-1">
                    <div className="absolute top-20 md:top-22 left-0 md:left-1/4 h-12 w-48 md:h-20 md:w-60 bg-white rounded-full z-30 flex flex-row items-center gap-4 px-6">
                        <img src="./assets/icons/search.png" className="pixelated h-4 md:h-6 -ml-2 md:ml-0" alt="" />
                        <p className="text-lg md:text-2xl text-almost-black">home office</p>
                    </div>
                </Link>
                <img style={{width: "50%", left: "20%"}} className="pixelated rounded-3xl absolute -top-12 z-20" src="assets/artwork/search/2.png" />
                <img style={{width: "35%"}} className="pixelated rounded-3xl absolute top-6 left-0" src="assets/artwork/search/4.png" />
                <img style={{width: "30%", left: "58%"}} className="pixelated rounded-3xl absolute -top-20 hidden md:block" src="assets/artwork/search/3.png" />
                <img style={{width: "30%", left: "52%"}} className="pixelated rounded-3xl absolute top-64 hidden lg:block" src="assets/artwork/search/1.png" />
            </div>
            <div className="flex flex-col justify-center items-center text-center -mt-32 md:mt-0 max-w-full md:max-w-[50%] lg:max-w-[40%] gap-2 sm:gap-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Search for an idea</h1>
              <p className="text-md sm:text-xl">What do you want to try next? Think of something you're into — like “home office” — and see what you find.</p>
              <ExploreButton />
            </div>
          </div>
        );
}

export default SearchSection;
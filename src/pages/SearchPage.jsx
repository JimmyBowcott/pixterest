import ExploreButton from '../components/ExploreButton';

const SearchPage = () => {
    return (
        <div className="flex flex-row justify-around items-center bg-pale-yellow text-pink-red h-screen">
            <div className="">
                <h1>Images go here</h1>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center text-center">
                <h1 className="text-5xl font-bold">Search for an idea</h1>
                <p className="text-2xl  max-w-md">What do you want to try next? Think of something you're into—like “easy chicken dinner”—and see what you find.</p>
                <ExploreButton />
            </div>
        </div>
    )
}

export default SearchPage;
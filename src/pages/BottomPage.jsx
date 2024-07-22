import ImageArray from "../components/ImageArray";

const BottomPage = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute top-0 left-0 overflow-none max-h-full max-w-full z-50">
                    <ImageArray />
                </div>
            </div>
            <div className="flex flex-row justify-around items-center text-white h-screen">
                <div className="">
                    <h1 className="text-7xl max-w-md">Sign up to get your ideas</h1>
                </div>
                <div className="flex flex-column gap-2">
                    <h1>Sign up form</h1>
                </div>
            </div>
        </>
    )
}

export default BottomPage;
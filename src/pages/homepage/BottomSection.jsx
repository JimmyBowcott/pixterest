import ImageArray from "../../components/ImageArray";
import SignUpForm from "../../components/SignUpForm";
import { Link } from "react-router-dom";
import '../../css/Section.css'
import { useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import ExploreButton from "../../components/ExploreButton";

const BottomSection = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="relative z-0">
                <div className="absolute top-0 left-0 max-h-full max-w-full z-0 overflow">
                    <div className="h-screen overflow-hidden">
                        <ImageArray/>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex flex-row justify-around items-center text-white w-full h-screen z-10" style={{background: "rgba(0, 0, 0, 0.75)"}}>
                    <div className="secText lowResHide">
                        <h1 className="text-7xl max-w-md">Sign up to get your ideas</h1>
                    </div>
                    {!user &&
                        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 bg-white mt-16 rounded-3xl p-10 px-20 text-almost-black">
                            <img src="favicon.ico" className="pixelated h-10 w-10 mb-3" alt="" />
                            <h1 className="text-2xl font-bold">Welcome to Pixterest</h1>
                            <p className="text-lg mb-2">Find new ideas to try</p>
                            <SignUpForm />
                            
                            { /* Google button, not currently in use
                                <p className="font-bold text-sm">OR</p>
                                <GoogleButton />
                            */
                            }

                            <div className="flex flex-col justify-center items-center max-w-64 text-xs md:text-sm text-center gap-2 md:gap-4 mt-2 md:mt-4">
                                <p className="text-gray-500">By continuing you agree to Pixterest's 
                                <Link to="/" className="text-almost-black font-bold hover:underline"> Terms of Service </Link> 
                                and acknowledge that you have read our 
                                <Link to="/" className="text-almost-black font-bold hover:underline"> Privacy Policy</Link>.
                                <Link to="/" className="text-almost-black font-bold hover:underline"> Notice at collection</Link>.</p>
                                <p>Already a member? <Link to="/login" className="font-bold">Log in</Link></p>
                            </div>
                        </div>
                    }
                    {user &&
                        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 bg-white mt-16 rounded-3xl p-10 px-20 text-almost-black">
                            <img src="favicon.ico" className="pixelated h-10 w-10 mb-3" alt="" />
                            <h1 className="text-2xl font-bold">Welcome back!</h1>
                            <p className="text-lg mb-2">Find new ideas to try</p>
                            <ExploreButton />
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default BottomSection;
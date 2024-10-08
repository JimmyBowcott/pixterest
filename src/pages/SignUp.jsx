import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";
import { AuthContext } from "../components/context/AuthContext";

const SignUp = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
        {user && <Navigate to="/Explore"/>}
        <Nav showSearchBar={false}/>
            <div className="flex flex-col justify-center items-center w-screen h-screen gap-6">
                <h1 className="text-4xl">Sign up to Pixterest</h1>
                <SignUpForm />
                <p>Already have an account? <Link to="/login" className="hover:underline">Log in</Link></p>
            </div>
        </>
    )
}

export default SignUp;
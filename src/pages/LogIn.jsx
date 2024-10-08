import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Nav from "../components/Nav";
import LogInForm from "../components/LogInForm";
import { AuthContext } from "../components/context/AuthContext";

const LogIn = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {user && <Navigate to="/Explore"/>}
            <Nav showSearchBar={false}/>
            <div className="flex flex-col justify-center items-center w-screen h-screen gap-6">
                <h1 className="text-4xl">Log in to Pixterest</h1>
                <LogInForm />
                <p>Don't have an account? <Link to="/signup" className="hover:underline">Sign Up</Link></p>
            </div>
        </>
    )
}

export default LogIn;
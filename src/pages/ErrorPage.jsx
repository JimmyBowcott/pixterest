import '../css/index.css'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-3xl pb-12">Page Not Found</p>
      <p className="text-2xl pb-4">The page you are looking for does not exist.</p>
      <Link to="/">
      <button className="rounded-xl text-2xl bg-pixterest-red hover:bg-bg-btn-p-hov text-white p-2 px-5">
        Back to Homepage</button></Link>
    </div>

  );
};

export default ErrorPage;
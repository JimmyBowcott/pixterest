import { useEffect } from "react";
import Nav from "../components/Nav";

const AboutPage = () => {

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
        },[]);

    return (
        <>
        <Nav />
        <div className="flex flex-col justify-center items-center pt-28 gap-8 w-full text-center mb-4 md:max-w-[55vw] px-4 mx-auto">
        <h1 className="text-3xl font-bold">Welcome to Pixterest</h1>
                <video controls className="w-full h-auto"> 
                    <source src="./assets/videos/demo.mp4" type="video/mp4" />
                </video>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-lg px-4">Pixterest is the industry-leading Pinterest clone, designed specifically for pixel art.<br /><br />
                Pixterest uses DeviantArt's RSS API to fetch your favourite images and save them locally for you to use - try searching for an image, or
                looking through the explore page to find inspiration.<br /><br />
                This site is designed to be fully responsive and usable at every screen size, minus extreme aspect ratios. Sign up/in to save posts - no email is required.
                If you spot anything that needs fixing, please let me know :).</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Why?</h2>
                <p className="text-lg px-4">I love pixel art, and I love programming. Pixterest is a way for me to put both of these into one project, whilst sharpening my skills and creativity.</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Tech</h2>
                <p className="text-lg px-4">This site was built using React and Tailwind for the interactive components and fast-to-write CSS. The backend is built using Node.js, Express.js and MongoDB,
                    and containerised with Docker.
                </p>
            </div>
        </div>
        </>
    )
}

export default AboutPage;
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
        <div className="flex flex-col justify-center items-center pt-28 gap-4 w-full text-center">
            <h1 className="text-3xl font-bold">Welcome to Pixterest</h1>
            <p className="text-lg max-w-[1280px] px-4">Pixterest is the industry-leading Pinterest clone, designed specifically for pixel art.<br /><br />
            Pixterest uses DeviantArt's RSS API to fetch your favourite images and save them locally for you to use - try searching for an image, or
            looking through the explore page to find inspiration.<br /><br />
            This mock-up aims to improve the original features of Pinterest's site, namely its usability on mobile devices. This site is designed to be
            completely responsive, and usable at every screen size (bar extremes). Note that there is no
            backend to this site so saved posts are stored locally. If you spot anything that needs fixing, please let me know :).</p>
        </div>
        </>
    )
}

export default AboutPage;
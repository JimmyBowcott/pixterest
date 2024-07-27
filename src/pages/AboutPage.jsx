import Nav from "../components/Nav";

const AboutPage = () => {

    return (
        <>
        <Nav />
        <div className="flex flex-col justify-center items-center pt-28 gap-4 w-full text-center">
            <h1 className="text-3xl font-bold">Welcome to Pixterest</h1>
            <p className="text-lg">Pixterest is the industry-leading pixel-art-only Pinterest clone.</p>
        </div>
        </>
    )
}

export default AboutPage;
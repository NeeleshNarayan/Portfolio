import Navbar from "../components/Navbar";
import Hero from "../sections/Hero/Hero";
import Workspace from "../sections/Workspace/Workspace";
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <Workspace />
            
            <Footer />
        </>
    );
}
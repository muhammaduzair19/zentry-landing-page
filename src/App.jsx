import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Navabr from "./components/navbar";
import Features from "./components/features";
import Story from "./components/story";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navabr />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Informational from "./components/Informational/Informational";

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Informational />
            </main>
        </>
    );
}

export default App;

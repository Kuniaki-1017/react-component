import Header from "../../src/components/header/Header";
import Body from "../../src/components/body/Body";
import Footer from "../../src/components/footer/Footer";

const Home = () => {
    return (
        <div id="HOME">
            <div className="homeConteiner">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default Home;
import Js from '../../components/comp/js/Js';
import Wp from '../../components/comp/wp/Wp';
import Header from '../../components/comp/header/Header';
import Footer from '../../components/comp/footer/Footer';
import Main from '../../components/comp/main/Main';
// import { useState } from 'react';
import './Comp.css';


const Comp = () => {
    // [languege, setLnguege] = useState();

    return (
        <>
            <Header />
            <Main />
            <Js />
            <Wp />
            <Footer />
        </>

    )
}

export default Comp;
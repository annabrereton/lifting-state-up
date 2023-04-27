import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {useState} from "react";

const App = () => {
    // Putting the shared state on the nearest common parent
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            {/*Passing the state down the component tree via props*/}
            <Header loggedIn={loggedIn}/>
            <Content/>
            <Footer/>
        </>
    );
}

export default App;

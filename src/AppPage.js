import Page from "./components/Page";
import {useState} from "react";
import Footer from "./components/Footer";

// const AppPage = () => {
//
//     const  [pageActive, setPageActive] = useState(true)
//
//     return (
//         <>
//         <button  onClick={() => setPageActive(!pageActive)}>Page</button>
//             {pageActive ? <Page /> : '404 not found' }
//          </>
//     )
// }

// click on about, home page is unmounted and about page is mounted etc:
// could also put components here in place of <h1> </h1>
const AppPage = () => {
    const [activePage, setActivePage] = useState('home')

    const [loggedIn, setLoggedIn] = useState(false)
    const toggleLoggedIn = () => {
        // Using !loggedIn to invert the boolean each time we call this function
        setLoggedIn(!loggedIn)
    }

    return (
        <>
            <nav>
                <button onClick={() => setActivePage('home')}>Home</button>
                <button onClick={() => setActivePage('about')}>About</button>
                <button onClick={() => setActivePage('portfolio')}>Portfolio</button>
            </nav>

            {activePage === 'home' && <h1>Homepage</h1>}
            {activePage === 'about' && <h1>About</h1>}
            {activePage === 'portfolio' && <h1>Portfolio</h1>}

            <Footer loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn}/>
        </>
    )
}

export default AppPage
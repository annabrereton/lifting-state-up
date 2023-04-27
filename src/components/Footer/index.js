import Button from "./Button";
// Prop potato
// This component doesnt actually need to know about loggedIn
// Its job is just to pass it down to the component that does
// Also getting toggleLoggedIn to pop potato down to the button
const Footer = ({loggedIn, toggleLoggedIn}) => {
    return (
        <div>
            Footer
            {/*Here we play prop potato with the data, all this component does*/}
            {/*is pass it down to it's child*/}
            {/*Prop potatoing the toggle function as well*/}
            <Button loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn}/>
        </div>
    )
}

export default Footer
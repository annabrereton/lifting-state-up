import Button from "./Button";
// Prop potato
// This component doesnt actually need to know about loggedIn
// Its job is just to pass it down to the component that does
const Footer = ({loggedIn}) => {
    return (
        <div>
            Footer
            {/*Here we play prop potato with the data, all this component does*/}
            {/*is pass it down to it's child*/}
            <Button loggedIn={loggedIn}/>
        </div>
    )
}

export default Footer
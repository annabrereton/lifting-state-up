// Accepting the loggedIn prop via destructuring
const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        // Calling the toggle function that was passed down
        // This updates the state on App, which then trickles down the component
        // tree to update all componants that use the state
        <button onClick={toggleLoggedIn}>{loggedIn ? 'Logout' : 'Login'}</button>
    )
}

export default Button
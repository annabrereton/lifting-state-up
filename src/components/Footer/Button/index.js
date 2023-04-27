// Accepting the loggedIn prop via destructuring
const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        <div>{loggedIn ? 'Logout' : 'Login'}</div>
    )
}

export default Button
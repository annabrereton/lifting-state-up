// Here we are using object destructuring to accept
// the loggedIn prop that was passed to this component
// by it's parent (App.js)
const Header = ({loggedIn}) => {
    return (
        <div>
            <h3>Header</h3>
            {/*Here we use a ternary to display a message depending on whether or not*/}
            {/*anyone is logged in*/}
            {loggedIn ? 'Welcome Back!' : 'Welcome stranger!'}
        </div>
    )
}

export default Header
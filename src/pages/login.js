import Login from '../components/Login'

function login() {
    return (
        <Login
        layoutId="Login"
        initial={{ opacity: 0, x: -50 }}
        animate= {{ opacity: 1, x: 0 }}
        exit= {{ opacity: 0, x: 50 }}
        />
    )
}

export default login

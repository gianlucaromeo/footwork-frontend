import { useNavigate } from 'react-router-dom'

const AuthenticationPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Join Polijazz</h1>
            <div>***An easy dance video management</div>
            <button onClick={ () => navigate('/registration') }>
                Register
            </button>
            <div>Already have an account?</div>
            <button onClick={ () => navigate('/login') }>
                Login
            </button>
        </div>
    )
}

export default AuthenticationPage
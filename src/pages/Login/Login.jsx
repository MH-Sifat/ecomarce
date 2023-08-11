import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className='maindiv'>
            <div className='Logbackground'></div>
            <div className='signup'>
                <h2>Sign Up</h2>
                <p>Email</p>
                <input type="email" />
                <p>Password</p>
                <input type="text" />
                <p>Confirm Password</p>
                <input type="text" />
                <button>Sign Up</button>
                <p>Already have an account?<span>Login</span></p>
                <div className='or'>
                <hr/>
                <p>or</p>
                <hr/>
                </div>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
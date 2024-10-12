// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import your CSS

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showOtpSection, setShowOtpSection] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement login logic here
    };

    const handleSendOtp = (e) => {
        e.preventDefault();
        alert('OTP sent to your email!');
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <p onClick={() => setShowOtpSection(!showOtpSection)} style={{ cursor: 'pointer', color: 'blue' }}>
                    Forgot Password?
                </p>
            </form>
            {showOtpSection && (
                <div className="otp-section">
                    <h3>Send OTP</h3>
                    <form onSubmit={handleSendOtp}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Send OTP</button>
                    </form>
                </div>
            )}
            <p onClick={handleSignupRedirect} style={{ cursor: 'pointer', color: 'blue' }}>
                Don't have an account? Sign Up
            </p>
        </div>
    );
};

export default LoginForm;

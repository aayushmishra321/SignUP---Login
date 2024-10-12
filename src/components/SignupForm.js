// SignupForm.js
import React, { useState } from 'react';
import { auth, provider } from './firebase'; // Firebase setup
import { signInWithPopup } from 'firebase/auth';
import './styles.css'; // Import your CSS

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    // Handle regular signup form submission
    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!acceptTerms) {
            alert('Please accept the terms and conditions!');
            return;
        }
        // Implement signup logic here
        console.log('Signing up:', { email, password, fullName, phoneNumber });
    };

    // Handle signup with Google
    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User signed in with Google:', user);
            // Perform additional logic after Google signup
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
            // Handle specific error cases if necessary
        }
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                    I accept the <a href="#">terms and conditions</a>
                </label>
                <button type="submit">Signup</button>
                <button type="button" onClick={handleGoogleSignup}>
                    Signup with Google
                </button>
            </form>
        </div>
    );
};

export default SignupForm;

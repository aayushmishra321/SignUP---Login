// ForgotPassword.js
import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = () => {
        // Logic to send OTP to the email
        setIsOtpSent(true);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Logic to verify OTP and reset password
    };

    return (
        <div className="forgot-password">
            <h2>Forgot Password</h2>
            <form onSubmit={isOtpSent ? handleResetPassword : handleSendOtp}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {isOtpSent && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </>
                )}
                <button type="submit">{isOtpSent ? 'Reset Password' : 'Send OTP'}</button>
            </form>
        </div>
    );
};

export default ForgotPassword;

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Page } from "../../App";
import './Register.css';
import TextInput, { MessageLevel } from "../shared/TextInput";
import { register } from "../../api/Authorization";
import { RegisterResponse } from "../../api/Authorization";
import { Link, useNavigate } from 'react-router-dom';

interface RegisterProps {
    handleNavigate: (page: Page) => void;
    setUsername: Dispatch<SetStateAction<string>>;
}

interface RegisterFormData {
    username: string;
    password: string;
    confirmPassword: string;
}

const Register: React.FC<RegisterProps> = ({ handleNavigate, setUsername }) => {
    const [formData, setFormData] = useState<RegisterFormData>({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordMessageLevel, setPasswordMessageLevel] = useState<MessageLevel>(MessageLevel.NONE);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setFormData({username: '', password: '', confirmPassword: ''});
        setPasswordMessage("");
        setPasswordMessageLevel(MessageLevel.NONE)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if(name === 'password') {
            updatePasswordMessage(value, formData.confirmPassword);
        } else if (name === 'confirmPassword') {
            updatePasswordMessage(formData.password, value);
        }
    };

    const updatePasswordMessage = (newPassword: string, newConfirmPassword: string) => {
        if(newConfirmPassword === undefined || newConfirmPassword.length < 1) {
            setPasswordMessage("");
            setPasswordMessageLevel(MessageLevel.NONE);
        } else if(newPassword !== newConfirmPassword && (newConfirmPassword !== undefined && newConfirmPassword.length > 0)) {
            setPasswordMessage("Passwords must match");
            setPasswordMessageLevel(MessageLevel.WARNING);
        } else if(newPassword === newConfirmPassword && newConfirmPassword !== undefined && newConfirmPassword.length > 0) {
            setPasswordMessage("");
            setPasswordMessageLevel(MessageLevel.NONE);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const data: RegisterResponse = await register(formData);
            if (data.success) {
                setMessage('Registration successful');
                setUsername(formData.username);
                if (data.token) {
                    localStorage.setItem('authToken', data.token);
                }
                setTimeout(() => {
                    handleNavigate('home');
                    navigate("/home");
                }, 1000);
            } else {
                setMessage(data.message || 'Registration failed');
            }
        } catch (error) {
            setMessage('Error connecting to server. Please try again.');
            console.error('Register error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const disableSubmit = () => {
        return isLoading || formData.password !== formData.confirmPassword
    }

    return (
        <div className="register-container">
            <div className="register-form-wrapper">
                <h1>Register</h1>
                <form onSubmit={handleSubmit} className="register-form">
                    <TextInput
                        label="Username"
                        id='username'
                        type='text'
                        value={formData.username}
                        placeholder='username'
                        isLoading={isLoading}
                        onChange={handleInputChange}
                    />
                    <TextInput
                        label="Password"
                        id='password'
                        type='password'
                        value={formData.password}
                        placeholder='password'
                        isLoading={isLoading}
                        onChange={handleInputChange}
                    />
                    <TextInput
                        label="Confirm Password"
                        id='confirmPassword'
                        type='password'
                        value={formData.confirmPassword}
                        placeholder='confirm password'
                        isLoading={isLoading}
                        onChange={handleInputChange}
                        message={passwordMessage}
                        messageLevel={passwordMessageLevel}
                    />
                    <button type="submit" disabled={disableSubmit()} className="register-button">
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    <div className="login-link">
                        {"Already a member? "}<Link to="/" onClick={() => handleNavigate('login')}>Login</Link>
                    </div>
                </form>
                {message && (
                    <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Register;
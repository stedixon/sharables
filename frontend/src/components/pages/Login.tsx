import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TextInput from '../shared/TextInput';
import { login, LoginResponse, LoginFormData } from '../../api/Authorization';
import { Page } from '../../App';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
    setCurrentPage: Dispatch<SetStateAction<Page>>;
    setUsername: Dispatch<SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ setCurrentPage, setUsername }) => {

    const [message, setMessage] = useState<string>('');
    const [formData, setFormData] = useState<LoginFormData>({
      username: '',
      password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setFormData({username: '', password: ''});
        setMessage('');
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
    
        try {
          const data: LoginResponse = await login(formData);
    
          if (data.success) {
            setUsername(formData.username);
            // Store token in localStorage or context
            if (data.token) {
              localStorage.setItem('authToken', data.token);
            }
            // Navigate to home page after successful login
            setTimeout(() => {
              navigate('/home', { replace: true });
              setCurrentPage('home');
              setMessage('');
            }, 1000);
          } else {
            setMessage(data.message || 'Login failed');
          }
        } catch (error) {
          setMessage('Error connecting to server. Please try again.');
          console.error('Login error:', error);
        } finally {
          setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
          <div className="login-form-wrapper">
            <h1>Welcome to Sharables</h1>
            <form onSubmit={handleSubmit} className="login-form">
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
              label='Password'
              id='password'
              value={formData.password}
              placeholder='password'
              type='password'
              isLoading={isLoading}
              onChange={handleInputChange}
            />
            <button type="submit" disabled={isLoading} className="login-button">
               {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <div className="register-link">
              {"Not a member? "}<Link to={"/register"} onClick={() => setCurrentPage('register')}>Create an account</Link>
            </div>
          </form>
          {message && (
            <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
          </div>
        </div>
      );
}

export default Login;
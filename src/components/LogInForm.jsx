import { useState, useContext } from 'react';
import apiClient from '../apiClient';
import { AuthContext } from './context/AuthContext';

function LogInForm() {
    
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await apiClient.post('/api/sign-in', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            login(response.data.user);
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message
            console.error('Error logging in:', errorMessage);
            setError(errorMessage);
        }

    }
    
    const togglePasswordVisibility = () => {
        setPasswordIsVisible(!passwordIsVisible);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:text-lg">
            {error && <p className="text-red-500">Error: {error}</p>}
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className='border-grey'
                    required
                />
            </div>
            <div className="relative">
                <label htmlFor="password">Password</label>
                <img src={passwordIsVisible ? "./assets/icons/eye-closed.png" : "./assets/icons/eye.png"} className="pixelated h-3 absolute top-11 right-3 cursor-pointer" alt="" onClick={togglePasswordVisibility}/>
                <input
                    type={passwordIsVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className='border-grey'
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-pixterest-red text-white border-none hover:bg-bg-btn-p-hov text-center mx-auto rounded-3xl w-full p-2 mt-2 md:mt-4"
            >Continue</button>
        </form>
    );
}

export default LogInForm;
import { useState, useContext } from 'react';
import apiClient from '../apiClient';
import { AuthContext } from './context/AuthContext';

function SignUpForm() {
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        signup: '',
        username: '',
        password: '',
    });

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const validateField = (name, value) => {
        let error = '';

        if (name === 'username') {
            if (!value) {
                error = 'Username is required';
            } else if (value.length < 3) {
                error = 'Username must have 3 characters';
            }
        } else if (name === 'password') {
            if (!value) {
                error = 'Password is required';
            } else if (value.length < 6) {
                error = 'Password must have 6 characters';
            }
        }

        return error;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors({
            ...errors,
            [name]: error
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = {};

        for (const key in formData) {
            const error = validateField(key, formData[key]);
            if (error) {
                valid = false;
                newErrors[key] = error;
            }
        }

        setErrors(newErrors);

        if (valid) {
            try {

                const response = await apiClient.post('/api/sign-up', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                login(response.data.user);
                
            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message
                setErrors({
                    ...errors,
                    signup: errorMessage
                });
            }
        }
    }
    
    const togglePasswordVisibility = () => {
        setPasswordIsVisible(!passwordIsVisible);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:text-lg">
            {errors.signup && <span className="text-red-600 text-sm md:text-base">Error: {errors.signup}</span>}
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.username ? 'border-red-600' : 'border-grey'}
                    required
                />
                {errors.username && <span className="text-red-600 text-sm md:text-base">{errors.username}</span>}
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
                    onBlur={handleBlur}
                    className={errors.password ? 'border-red-600' : 'border-grey'}
                    required
                />
                {errors.password && <span className="text-red-600 text-sm md:text-base">{errors.password}</span>}
            </div>
            <button
                type="submit"
                className="bg-pixterest-red text-white border-none hover:bg-bg-btn-p-hov text-center mx-auto rounded-3xl w-full p-2 mt-2 md:mt-4"
            >Continue</button>
        </form>
    );
}

export default SignUpForm;
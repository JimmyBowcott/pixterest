import React, { useState } from 'react';

function SimpleForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        birthdate: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        birthdate: ''
    });

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const validateField = (name, value) => {
        let error = '';

        if (name === 'email') {
            if (!value) {
                error = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = 'Hmm, that doesn\'t look like an email';
            }
        } else if (name === 'password') {
            if (!value) {
                error = 'Password is required';
            } else if (value.length < 6) {
                error = 'Password must have 6 characters';
            }
        } else if (name === 'birthdate') {
            if (!value) {
                error = 'Birthdate is required';
            } else {
                const today = new Date();
                const birthdate = new Date(value);
                let age = today.getFullYear() - birthdate.getFullYear();
                const monthDifference = today.getMonth() - birthdate.getMonth();

                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
                    age--;
                }

                if (age < 13) {
                    error = 'You must be at least 13 years old';
                }
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

    const handleSubmit = (e) => {
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
            alert('While the enthusiasm is appreciated, there is no backend here :)');
        }
    }
    
    const togglePasswordVisibility = () => {
        setPasswordIsVisible(!passwordIsVisible);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? 'border-red-600' : 'border-grey'}
                    required
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
            </div>
            <div className="relative">
                <label htmlFor="password">Password</label>
                <img src="./src/assets/icons/eye.png" className="pixelated h-3 absolute top-11 right-3 cursor-pointer" alt="" onClick={togglePasswordVisibility}/>
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
                {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
            </div>
            <div>
                <label htmlFor="birthdate">Birthdate</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.birthdate ? 'border-red-600' : 'border-grey'}
                    required
                />
                {errors.birthdate && <span className="text-red-600 text-sm">{errors.birthdate}</span>}
            </div>
            <button
                type="submit"
                className="bg-pixterest-red text-white border-none hover:bg-bg-btn-p-hov text-center mx-auto rounded-3xl w-full p-2"
            >Continue</button>
        </form>
    );
}

export default SimpleForm;
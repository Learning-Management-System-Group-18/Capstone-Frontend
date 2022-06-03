import React, { useState } from 'react';
import './style.css';

const RegisterUser = () => {
    const [inputs, setInputs] = useState([
        {
            placeholder: 'Masukkan nama',
            type: 'text',
            value: '',
        },
        {
            placeholder: 'Masukkan email',
            type: 'email',
            value: '',
        },
        {
            placeholder: 'Masukkan password',
            type: 'password',
            value: '',
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    const handleChange = (value, index) => {
        const newInputs = [...inputs];
        newInputs[index].value = value;
        setInputs(newInputs);
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col bg_banner mx-auto py-4'>
                    <img className='banner_img position' src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" />
                    <h5 className='text-center mt-3 position_text_title'>Welcome to Level Up Please Sign Up Here</h5>
                    <p className='position_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis consequat mi amet maecenas cursus tellus. </p>
                </div>
                <div className='col'>
                    <div className='row mx-auto py-4'>
                        <h1 className='title'>Create Account</h1>
                        <p className='text-start mt-1 mb-5'>already have an account? Login </p>
                        <div>
                            <form onSubmit={handleSubmit}>
                                {
                                    inputs.map((input, inputIdx) => (
                                        <input key={inputIdx} className='form-control mr-3 mb-4' type={input.type} placeholder={input.placeholder} onChange={(e) => handleChange(e.target.value, inputIdx)} value={input.value} />
                                    ))
                                }
                                <div className='d-grid gap-2'>
                                    <button type='submit' className='btn button mt-5'>Sign Up</button>
                                    <p className='my-3'><b>or</b></p>
                                    <button className='btn button_2'>Sign Up with company email</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;
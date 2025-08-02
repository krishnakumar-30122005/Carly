import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);

  const initialInput = {
    name: '',
    email: '',
    password: '',
  };

  const [mode, setMode] = useState('Sign Up'); // Sign Up or Login
  const [input, setInput] = useState(initialInput);
  const [submitted, setSubmitted] = useState(false); // flag to control redirection

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        mode === 'Sign Up'
          ? 'http://localhost:8000/api/user/register'
          : 'http://localhost:8000/api/user/login';

      const { data } = await axios.post(endpoint, input);

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setSubmitted(true); // trigger redirect
        toast.success(data.message || `${mode} successful`);
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message);
    }
  };

  // Redirect only after successful login/signup
  useEffect(() => {
    if (token && submitted) {
      navigate('/');
    }
  }, [token, submitted, navigate]);

  // Switch between Login and Sign Up
  const toggleMode = () => {
    setMode((prev) => (prev === 'Sign Up' ? 'Login' : 'Sign Up'));
    setInput(initialInput); // reset form
    setSubmitted(false); // avoid redirect on switch
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-primary text-2xl font-semibold text-center w-full'>
          {mode === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>

        <p className='text-center w-full'>
          Please {mode === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
        </p>

        {mode === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={input.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type='submit'
          className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-violet-600 transition-all duration-300'
        >
          {mode === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className='text-center w-full'>
          {mode === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={toggleMode}
                className='text-primary underline cursor-pointer'
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span
                onClick={toggleMode}
                className='text-primary underline cursor-pointer'
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;

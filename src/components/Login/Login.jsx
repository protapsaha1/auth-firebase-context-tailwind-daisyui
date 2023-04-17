import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../providers/ProvidersAuth';

const Login = () => {
    const { userSignUp } = useContext(userContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userSignUp(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
            })

            .catch(error => {
                console.log(error.message)
            })


    }
    return (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto p-4 mt-10'>
            <h4 className='text-sky-700 font-semibold'>Please Login</h4>
            <form onSubmit={handleLogin} className='mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" name="email" id="user-email" placeholder="info@gmail.com" className="input input-bordered" required />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" name="password" id="user-password" placeholder="your password" className="input input-bordered" required />
                    </label>
                </div>
                <input type="submit" value="Submit" className='border bg-blue-600 py-2 px-3 text-white rounded-lg mt-3 mx-12' />
            </form>
            <p><small>Forget password? <a className='text-red-600 link link-hover'>Reset password</a></small></p>
            <p><small>If new Create Account? <Link to="/register" className='text-sky-800 font-bold text-xl'>Sign up</Link></small></p>
        </div>
    );
};

export default Login;
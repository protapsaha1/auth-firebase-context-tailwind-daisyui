import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { userContext } from '../../providers/ProvidersAuth';


const auth = getAuth(app);

const Register = () => {
    const { user, createUser } = useContext(userContext)
    // console.log(createUser)

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                setError("");
                setSuccess("Successfully Sign up!!!");
                userVerification(result.user);
                userProfile(result.user, name);
            })

            .catch(error => {
                setError(error.message)
            })



        if (!/(?=.*[A-z])/.test(password)) {
            setError("Please add one uppercase at least.")
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError("Please add one number at least.")
            return;
        }
        else if (!/(?=.*[@&*$£%?#])/.test(password)) {
            setError("Please add one special character at least.")
            return;
        }
        else if (password.length < 6) {
            setError("six character required")
            return;
        }


    }

    const userVerification = user => {
        sendEmailVerification(user);
        alert("please verify your email address")
    }

    const userProfile = (name, user) => {
        updateProfile(user, {
            displayName: name
        })

            .then(() => {
                alert("user update profile");
            })

            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto p-4 mt-10'>
            <h4 className='text-2xl font-semibold text-sky-600 mb-2'>Please Register</h4>
            <form className='mx-auto' onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="name" id="user-name" placeholder="Your Name" className="input input-bordered" required />
                    </label>
                </div>
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
                <p className='text-red-500'><small>{error}</small></p>
                <p className='text-red-500'><small>{success}</small></p>
                <input type="submit" value="Register" className='border py-2 px-3 bg-blue-600 text-white font-bold mt-4 rounded-lg' />
            </form>
            <p><small>Already have a account? Please <Link to="/login" className='text-sky-800 font-bold text-xl'>Login</Link></small></p>
        </div>
    );
};

export default Register;
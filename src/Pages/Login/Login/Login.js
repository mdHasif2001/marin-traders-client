import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }


    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} </p>

    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else{
            toast('Please enter your email address')
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-dark text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="w-50 mx-auto d-block mb-2 btn btn-custom" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <p>New to Marin Traders? <Link to='/register' className='custom-reg-tex' onClick={navigateRegister}>Please Register</Link></p>

            <p>Forget Password? <button to='/register' className='btn btn-custom text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
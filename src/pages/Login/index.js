import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import InputLabel from '../../common-element/InputLabel';
import Button from '../../common-element/Button';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
    padding: 20px 30px;
    width: 450px;
    margin: 200px auto 0 auto;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 6px 15px 0 rgb(0 0 0 / 10%);
    background-color: #f1f1f1;
`;

const LoginTitlle = styled.h2`
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px;
`;

// const LoginForm = styled.form`
//     /* display: flex;
//     flex-direction: column; */
// `;

const Input = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: #f1f1f1;
    border-bottom: solid 3px #dfdfdf;
    font-size: 20px;
    margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
    color: red;
`;

const ForgotPasswordNavigate = styled.span`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    display: block;

    a {
        text-decoration: none;
        color: #888;
        :hover {
            text-decoration: underline;
        }
    }
`;

const SignupNavigate = styled.span`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    display: block;
    a {
        text-decoration: none;
        color: red;
        :hover {
            text-decoration: underline;
        }
    }
`;

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {};

    return (
        <LoginContainer>
            <LoginTitlle>Login</LoginTitlle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel htmlFor="email" size="20px" block>
                    Email:
                </InputLabel>
                <Input
                    id="email"
                    {...register('userName', {
                        required: true,
                        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                />
                {errors.userName?.type === 'required' && <ErrorMessage>Please enter this field</ErrorMessage>}
                {errors.userName?.type === 'pattern' && <ErrorMessage>Please enter a valid email!</ErrorMessage>}
                <InputLabel htmlFor="password" size="20px" block>
                    Password:
                </InputLabel>
                <Input
                    id="password"
                    type="password"
                    {...register('password', { required: true, minLength: 6, pattern: /^[A-Za-z0-9]*$/ })}
                />
                {errors.password?.type === 'required' && <ErrorMessage>Please enter this field</ErrorMessage>}
                {errors.password?.type === 'minLength' && (
                    <ErrorMessage>This field must have at least 6 characters</ErrorMessage>
                )}
                {errors.password?.type === 'pattern' && (
                    <ErrorMessage>This field must contain numbers and letters only</ErrorMessage>
                )}
                {/* <input type="radio" id="user" name="role" value="user" checked {...register('role')} />
                <label htmlFor="user">user</label>
                <input type="radio" id="admin" name="role" value="admin" {...register('role')} />
                <label htmlFor="admin">admin</label> */}

                <ForgotPasswordNavigate>
                    <Link to={'../forgot-password'}>Forget password?</Link>
                </ForgotPasswordNavigate>

                <SignupNavigate>
                    <Link to={'../signup'}>Don't have account?</Link>
                </SignupNavigate>

                <Button type="submit" primary color="#fff">
                    Login
                </Button>
            </form>
        </LoginContainer>
    );
};

export default Login;

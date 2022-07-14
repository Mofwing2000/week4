import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import InputLabel from '../../common-element/InputLabel';
import Button from '../../common-element/Button';
import { Link } from 'react-router-dom';
import { createAccount } from '../../config/firebase';

const SignupContainer = styled.div`
    padding: 20px 30px;
    width: 450px;
    margin: 200px auto 0 auto;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 6px 15px 0 rgb(0 0 0 / 10%);
    background-color: #f1f1f1;
`;

const SignupTitlle = styled.h2`
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px;
`;

const TextInput = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: #f1f1f1;
    border-bottom: solid 3px #dfdfdf;
    font-size: 20px;
    margin-bottom: 20px;
`;

const RadioInput = styled.input`
    margin-right: 20px;
`;

const RoleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
    color: red;
`;

const LoginNavigate = styled.span`
    display: block;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    a {
        text-decoration: none;
        color: red;
        :hover {
            text-decoration: underline;
        }
    }
`;
const Signup = () => {
    const [account, setAccount] = useState({
        email: '',
        displayName: '',
        password: '',
        role: 'user',
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (e) => {
        createAccount(account.email, account.displayName, account.password, account.role);
    };

    const handleEmailChange = (e) => {
        setAccount({
            ...account,
            email: e.target.value,
        });
    };

    const handleDisplayNameChange = (e) => {
        setAccount({
            ...account,
            displayName: e.target.value,
        });
    };

    const handlePasswordChange = (e) => {
        setAccount({
            ...account,
            password: e.target.value,
        });
    };

    const handleRoleChange = (e) => {
        setAccount({
            ...account,
            role: e.target.value,
        });
    };

    console.log(account);

    return (
        <SignupContainer>
            <SignupTitlle>Signup</SignupTitlle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel htmlFor="email" size="20px">
                    Email:
                </InputLabel>
                <TextInput
                    id="email"
                    {...register('email', {
                        required: true,
                        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        shouldFocusError: true,
                        onChange: handleEmailChange,
                        value: account.email,
                    })}
                />
                {errors.email?.type === 'required' && <ErrorMessage>Please enter this field</ErrorMessage>}
                {errors.email?.type === 'pattern' && <ErrorMessage>Please enter a valid email!</ErrorMessage>}

                <InputLabel htmlFor="displayName" size="20px">
                    Display name:
                </InputLabel>
                <TextInput
                    id="displayName"
                    {...register('displayName', {
                        required: true,
                        onChange: handleDisplayNameChange,
                        value: account.displayName,
                    })}
                />
                {errors.displayName?.type === 'required' && <ErrorMessage>Please enter this field</ErrorMessage>}

                <InputLabel htmlFor="password" size="20px">
                    Password:
                </InputLabel>
                <TextInput
                    id="password"
                    type="password"
                    {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^[A-Za-z0-9]*$/,
                        onChange: handlePasswordChange,
                        value: account.password,
                    })}
                />
                {errors.password?.type === 'required' && <ErrorMessage>Please enter this field</ErrorMessage>}
                {errors.password?.type === 'minLength' && (
                    <ErrorMessage>This field must have at least 6 characters</ErrorMessage>
                )}
                {errors.password?.type === 'pattern' && (
                    <ErrorMessage>This field must contain numbers and letters only</ErrorMessage>
                )}
                <RoleContainer>
                    <div>
                        <RadioInput
                            type="radio"
                            id="user"
                            name="role"
                            value="user"
                            checked={account.role === 'user'}
                            {...register('role', { onChange: handleRoleChange })}
                        />
                        <InputLabel htmlFor="user" size="20px">
                            User
                        </InputLabel>
                    </div>
                    <div>
                        <RadioInput
                            type="radio"
                            checked={account.role === 'admin'}
                            id="admin"
                            name="role"
                            value="admin"
                            {...register('role', { onChange: handleRoleChange })}
                        />
                        <InputLabel htmlFor="admin" size="20px">
                            Admin
                        </InputLabel>
                    </div>
                </RoleContainer>

                {/* <input type="radio" id="user" name="role" value="user" checked {...register('role')} />
                <label htmlFor="user">user</label>
                <input type="radio" id="admin" name="role" value="admin" {...register('role')} />
                <label htmlFor="admin">admin</label> */}

                <LoginNavigate>
                    <Link to={'../login'}>Already have an account?</Link>
                </LoginNavigate>

                <Button type="submit" primary color="#fff">
                    Signup
                </Button>
            </form>
        </SignupContainer>
    );
};

export default Signup;

import React from 'react';
import {
	Button,
	InputForm,
	InputFormWrapper,
    Title,
	LinkWrapper,
	SwitchPage,
	ButtonWrapper
} from './LoginAndSignUp.css';

import {
	InputField
} from '../../reusable';

import { Link } from 'react-router-dom';


import { reduxForm } from 'redux-form';


const SignIn = props => {
	const { handleSubmit } = props;
	return (
		<InputFormWrapper>
			<InputForm onSubmit={handleSubmit}>
				<Title>Sign In</Title>
				<InputField
					fieldName="Email"
					labelTxt="Email:"
					placeholder="Email"
				/>
				<InputField
					fieldName="password"
					labelTxt="Passowrd:"
                    placeholder="Password"
                    type="password"
				/>
                <LinkWrapper>
					<Link to='/signup'>
						<SwitchPage>Don't have an account? Go to Sign Up page</SwitchPage>
					</Link>
				</LinkWrapper>
				<ButtonWrapper>
					<Button type="submit">Sing in</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignIn);

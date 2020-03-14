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
	InputField,
	validations
} from '../../reusable';

import { Link } from 'react-router-dom';


import { reduxForm } from 'redux-form';


const SignIn = props => {
	const { handleSubmit } = props;
	const { email, required } = validations;
	return (
		<InputFormWrapper>
			<InputForm onSubmit={handleSubmit}>
				<Title>Sign In</Title>
				<InputField
					fieldName="email"
					labelTxt="Email:"
					placeholder="Email"
					validation={[email, required]}
				/>
				<InputField
					fieldName="password"
					labelTxt="Passoword:"
                    placeholder="Password"
					type="password"
					validation={required}
				/>
                <LinkWrapper>
					<Link to='/signup'>
						<SwitchPage>Don't have an account? Go to Sign Up page</SwitchPage>
					</Link>
				</LinkWrapper>
				<ButtonWrapper>
					<Button type="submit">Sing In</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signin' })(SignIn);

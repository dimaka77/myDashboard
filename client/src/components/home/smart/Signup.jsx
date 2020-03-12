import React from 'react';
import {
	Button,
	ButtonWrapper,
	InputForm,
	InputFormWrapper,
	SwitchPage,
	LinkWrapper,
	Title
} from './LoginAndSignUp.css';

import {
	InputField
} from '../../reusable';

import { Link } from 'react-router-dom';


import { reduxForm } from 'redux-form';

const SignUp = props => {
	const { handleSubmit } = props;
	return (
		<InputFormWrapper>
			<InputForm onSubmit={handleSubmit}>
				<Title>Sign Up</Title>
				<InputField
					fieldName="firstName"
					labelTxt="First name:"
					placeholder="First name"
				/>
				<InputField
					fieldName="lastName"
					labelTxt="Last name:"
					placeholder="Last name"
				/>
				<InputField
					fieldName="email"
					labelTxt="Email:"
					placeholder="Email"
				/>
				<InputField
					fieldName="password"
					labelTxt="Password:"
					placeholder="Password"
					type="password"
				/>	
				<LinkWrapper>
					<Link to='/signin'>
						<SwitchPage>Already have an account? Go to Sign In page</SwitchPage>
					</Link>
				</LinkWrapper>
				<ButtonWrapper>
					<Button type="submit">Sign Up</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignUp);

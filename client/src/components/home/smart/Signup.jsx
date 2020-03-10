import React from 'react';
import {
	Button,
	ButtonWrapper,
	InputForm,
	InputFormWrapper,
	SwitchPage,
	LinkWrapper,
	Title
} from './LoginAndSingup.css';

import {
	InputField
} from '../../reusable';

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
					fieldName="Email"
					labelTxt="Email:"
					placeholder="Email"
				/>
				<LinkWrapper>
					<SwitchPage>Already have an account? Go to Sign In page</SwitchPage>
				</LinkWrapper>
				<ButtonWrapper>
					<Button type="submit">Sign up</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignUp);

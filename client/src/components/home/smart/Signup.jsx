import React from 'react';
import {
	Button,
	InputForm,
	InputFormWrapper,
	Title,
	ButtonWrapper
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
				<ButtonWrapper>
					<Button type="submit">Sign up</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignUp);

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

const SignIn = props => {
	const { handleSubmit } = props;
	return (
		<InputFormWrapper>
			<InputForm onSubmit={handleSubmit}>
				<Title>Sign In</Title>
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
				<ButtonWrapper>
					<Button type="submit">Sing in</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignIn);

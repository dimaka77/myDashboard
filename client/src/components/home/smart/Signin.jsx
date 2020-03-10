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
				<ButtonWrapper>
					<Button type="submit">Sing in</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignIn);

import React from 'react';
import {
	Button,
	Label, 
	InputForm,
	InputFormWrapper, 
	Title, 
	TextInput,
	TextInputWrapper,
	ButtonWrapper
} from './Signup.css';

import { Field, reduxForm } from 'redux-form';

const SignUp = props => {
	const { handleSubmit } = props;
	return (
		<InputFormWrapper>
			<InputForm onSubmit={handleSubmit}>
				<Title>Sign Up</Title>
				<TextInputWrapper>
					<Label>First name:</Label>
					<Field name="firstName" component={TextInput} type="text" />
				</TextInputWrapper>
				<TextInputWrapper>
					<Label>Last name:</Label>
					<Field name="lastName" component={TextInput} type="text" />
				</TextInputWrapper>
				<TextInputWrapper>
					<Label>Email:</Label>
					<Field name="email" component={TextInput} type="email" />
				</TextInputWrapper>
				<ButtonWrapper>
					<Button type="submit">Submit</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignUp);

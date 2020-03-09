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
					<Field
						component={TextInput}
						name="firstName"
						placeholder="First name"
						type="text"
					/>
				</TextInputWrapper>
				<TextInputWrapper>
					<Label>Last name:</Label>
					<Field
						component={TextInput}
						name="lastName"
						placeholder="Last name"
						type="text"
					/>
				</TextInputWrapper>
				<TextInputWrapper>
					<Label>Email:</Label>
					<Field
						component={TextInput}
						name="email"
						placeholder="Email"
						type="email"
					/>
				</TextInputWrapper>
				<ButtonWrapper>
					<Button type="submit">Submit</Button>
				</ButtonWrapper>
			</InputForm>
		</InputFormWrapper>
	);
};

export default reduxForm({ form: 'signup' })(SignUp);

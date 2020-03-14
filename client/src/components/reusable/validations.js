const validations = {
    email: value =>
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined,
    
    required: value => value && value.length ? undefined : 'Please complete this field'
}

export default validations;
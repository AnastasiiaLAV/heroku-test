import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormStyled, FieldStyled, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts, addContacts} from 'redux/contacts/contacts-operations';
const id = nanoid(5);

const SignupSchema = Yup.object().shape({
name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter a name')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
phone: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Please enter a number')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Must be only digits"),
});

const ContactForm  = () => {
    const contacts = useSelector(getContacts);

    const dispatch = useDispatch();
        
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    const onAddContact = (payload, { resetForm }) => {
        dispatch(addContacts(payload));
        
        resetForm();

        return contacts;
    } 

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={onAddContact}
    >

    {({ errors, touched }) => (
        <FormStyled>
        <label htmlFor="name">Name</label>
        <FieldStyled
            id={id}
            type="text"
            name="name"
            placeholder="enter name"/>
        {errors.name && touched.name ? (
            <div>{errors.name}</div>
        ) : null}
        
        <label htmlFor="phone">Phone</label>
        <FieldStyled
            id={id}
            type="phone"
            name="phone"
            placeholder="enter number" />
        {errors.phone && touched.phone ? (
            <div>{errors.phone}</div>
        ) : null}
        
        <Button type="submit">Add contact</Button>
        </FormStyled>
    )}
    </Formik>
    )
};

ContactForm.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit:PropTypes.func,
}

export default ContactForm;
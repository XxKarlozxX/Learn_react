import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
}));

const customField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
        <TextField
            label={label}
            {...input}
            {...custom}
        />
    );
}

let ContactForm = props => {
    const { handleSubmit } = props;
    const classes = useStyles();

    return (
        <div>
            <h1>Redux form</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                <FormControl>
                    <Field name='inputName' component={customField} label='Nombre' type='text' />
                </FormControl>
                <FormControl>
                    <Field name='lastName' component={customField} label='Last Name' type='text' />
                </FormControl>
                <FormControl>
                    <Field name='email' component={customField} label='Email' type='email' />
                </FormControl>
                <Button type='submit' variant="contained">Default</Button>
            </form>
        </div>
    );
};

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm);

export default ContactForm;
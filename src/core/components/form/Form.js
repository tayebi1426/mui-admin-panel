import React from "react";
import PropTypes from "prop-types";
import {Formik, Form} from "formik";
import FormContext from "./FormContext";
import {DataValidator, isFunction} from "../../lib"

const Row = ({children, ...restProps}) => {
    return <div {...restProps}>{children}</div>
}
const defaultFormValidator = (validationRules, onValidate, formValues) => {
    if (!validationRules) {
        console.assert('validationRules for form validate is required!')
        return {global: 'validationRules for form validate is required!'}
    }
    let validator = DataValidator.validate(formValues, validationRules);
    if (isFunction(onValidate)) {
        onValidate(validator);
    }
    if (validator.passes()) {
        return {};
    }
    return validator.errors.errors;
}

const FormComponent = (props) => {
    let {
        children, innerRef, className, toolbar, onValidate,
        initialValues, onSubmit, validateOnChange, validateOnBlur, validationRules
        , validate = defaultFormValidator.bind(null, validationRules, onValidate)
    } = props;


    return <Formik initialValues={initialValues}
                   onSubmit={onSubmit}
                   validate={validate}
                   validateOnChange={validateOnChange}
                   validateOnBlur={validateOnBlur}>
        {
            (formikProps) => {
                return <FormContext.Provider value={formikProps}>
                    {
                        !!formikProps.errors.global &&
                        <span style={{color: "red"}}>{formikProps.errors.global}</span>
                    }
                    <Form ref={innerRef} className={className}>
                        {children}
                        <FormToolbar content={toolbar}/>
                    </Form>
                </FormContext.Provider>
            }
        }
    </Formik>
}

const FormToolbar = ({content}) => {
    if (!isFunction(content)) {
        return null;
    }

    return <Row className='mb-2 form--toolbar'>
        {content.apply(null)}
    </Row>
};

FormComponent.propTypes = {
    validateOnChange: PropTypes.bool,
    validateOnBlur: PropTypes.bool,
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    validate: PropTypes.func,
    onValidate: PropTypes.func,
    initialValues: PropTypes.object,
    validationRules: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    fieldLabels: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    toolbar: PropTypes.func
};

FormComponent.defaultProps = {
    validateOnChange: true,
    validateOnBlur: true,
    autoComplete: 'off',
    className: 'x-form'
};

export default FormComponent;
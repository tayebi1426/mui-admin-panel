import React from 'react'

import {TextField} from '@mui/material'
import {useTranslation} from "react-i18next";
import {useField} from "formik";

const FieldComponent = (props) => {
    const {t} = useTranslation();
    const [field, meta] = useField(props);

    let {id, label, name, placeholder, children, type, className} = props;
    id = id || name;
    if (placeholder) {
        placeholder = t(placeholder)
    }
    if (label) {
        label = t(label)
    }
    let fieldContent;
    if (type) {
        let tag = 'date' === type.toString() ? null : TextField;
        let helperText = meta.touched && meta.error ? meta.error : null
        fieldContent = React.createElement(tag, {
            ...field, ...props,
            label,
            placeholder,
            id,
            helperText,
            error: (helperText != null)
        });
    } else {
        fieldContent = children
    }
    return fieldContent


}/*
const FieldContent = (child) => {
    const [field] = useField(child.props)
    return React.cloneElement(child, {
        ...child.props,
        ...field
    }, child.props.children);
}
*/
/*FieldComponent.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    errorMessage: PropTypes.string
};*/
/*
FieldComponent.defaultProps = {
    className: 'col-lg-4 col-md-6',
};*/
export default FieldComponent;

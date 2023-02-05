import React from "react";
import PropTypes from "prop-types";
import {InputLabel} from "@mui/material";
import I18Massage from "../i18n/I18Massage";

function Label({children, code, ...restProps}) {
    if (!code) {
        return null;
    }
    return <InputLabel {...restProps}>
        {code && <I18Massage code={code}/>}
        {children}
    </InputLabel>
}

Label.propTypes = {
    code: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string
};

Label.defaultProps = {
    className: 'x-label'
};

export default Label;
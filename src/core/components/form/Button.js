import {Button, Icon} from "@mui/material";
import PropTypes from 'prop-types';
import I18Massage from "../i18n/I18Massage";

function ButtonElement(props) {
    let {type = 'submit', title, icon, color = 'primary', onClick} = props
    return <Button color={color} variant="contained" type={type} onClick={onClick}>
        {!!icon && <Icon>{icon}</Icon>}
        {!!title &&
        (<span>
            <I18Massage code={title}/>
        </span>)
        }
    </Button>
}

ButtonElement.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['submit', 'button']),
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning'])
}

export default ButtonElement
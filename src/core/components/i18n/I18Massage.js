import PropTypes from "prop-types";
import {withTranslation} from '../../lib/i18n';

function I18Massage ({code='', t}){
    return  t(code);
}

I18Massage.propTypes = {
    code: PropTypes.string.isRequired
};

export default withTranslation(I18Massage);

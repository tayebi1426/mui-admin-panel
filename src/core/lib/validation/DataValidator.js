import ValidatorJs from "validatorjs";
import ObjectUtils from "../ObjectUtils";
import faMessages from "./lang/fa";

class DataValidator {

    static validate(data, rules, labels) {
        let validator = new ValidatorJs(data, rules);
        DataValidator.setAttributeFormatter(validator, labels);
        return validator;
    }

    static setAttributeFormatter(validator, labels) {
        if (labels) {
            validator.setAttributeFormatter(function (attributeName) {
                return ObjectUtils.getValue(labels, attributeName) || attributeName
            });
        }
    }
}
const InitValidatorJs=()=>{
    ValidatorJs.useLang('fa');
    ValidatorJs.setMessages('fa',faMessages);
}

export default DataValidator;
export {
    InitValidatorJs
}
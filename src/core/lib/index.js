import ObjectUtils from "./ObjectUtils";
import DataValidator,{InitValidatorJs} from "./validation/DataValidator";

const isFunction=(func) =>{
    return func && typeof func === 'function';
}

export {
    ObjectUtils,
    DataValidator,
    isFunction,
    InitValidatorJs
}
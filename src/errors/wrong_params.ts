import RESTAPIError, { IFUNNY_ERRORS } from "./error_base.js";

export default interface RESTAPIErrorWrongParams extends RESTAPIError {
    error: IFUNNY_ERRORS.WRONG_PARAMS;
    error_description: RESTAPIWrongParamsMessage;
    status: 400;
}

export enum WRONG_PARAMS_MESSAGE {
    SUBSCRIBE = "You can not subscribe to yourself, it can cause dizziness",
}

export type RESTAPIWrongParamsMessage = `${WRONG_PARAMS_MESSAGE}`;

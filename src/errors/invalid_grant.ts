import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

export interface RESTAPIErrorInvalidGrant extends RESTAPIError {
    error: IFUNNY_ERRORS.INVALID_GRANT;
    error_description: RESTAPIInvalidGrantMessage;
    status: 401;
}

export default RESTAPIErrorInvalidGrant;

export enum INVALID_GRANT {
    TOKEN_EXPIRED = "token is expired",
}

type RESTAPIInvalidGrantMessage = `${INVALID_GRANT}`;

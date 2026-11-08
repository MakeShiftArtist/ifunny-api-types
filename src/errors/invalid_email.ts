import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

/**
 * Returned when an email is invalid
 */
export interface RESTAPIErrorInvalidEmail extends RESTAPIError {
    error: IFUNNY_ERRORS.INVALID_EMAIL;
    error_description: RESTAPIInvalidEmailMessage;
    status: 403;
}

export default RESTAPIErrorInvalidEmail;

export enum INVALID_EMAIL_MESSAGE {
    DISPOSABLE = "Domain of email was found in disposable domains list",
}

type RESTAPIInvalidEmailMessage = `${INVALID_EMAIL_MESSAGE}`;

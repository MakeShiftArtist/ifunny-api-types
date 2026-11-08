import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

/**
 * Returned when trying to create an account with an email that's already taken
 */
export interface RESTAPIErrorEmailExists extends RESTAPIError {
    error: IFUNNY_ERRORS.EMAIL_EXISTS;
    error_description: RESTAPIErrorEmailExistsMessage;
    status: 403;
}
export default RESTAPIErrorEmailExists;

export enum EMAIL_EXISTS_MESSAGE {
    USER_WITH_EMAIL = "There is a user with this email",
}

export type RESTAPIErrorEmailExistsMessage = `${EMAIL_EXISTS_MESSAGE}`;
